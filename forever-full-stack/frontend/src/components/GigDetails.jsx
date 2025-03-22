import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GigDetails = () => {
  const { id: gigId } = useParams(); // ✅ Extract correct ID
  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token'); // ✅ Store token globally
  const userId = localStorage.getItem('userId'); // ✅ Assuming user ID is stored after login
  console.log("Gig ID:", gigId);

  useEffect(() => {
    const fetchGigDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/gigs/${gigId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (data.success) {
          setGig(data.gig);
        } else {
          console.error("Error:", data.message);
        }
      } catch (error) {
        console.error('Error fetching gig details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (gigId) fetchGigDetails(); // ✅ Ensure gigId is valid before fetching
  }, [gigId, token]);

  const handleApply = async () => {
    if (!gigId || !userId) {
      alert("Missing gig ID or user information.");
      return;
    }

    const confirmation = window.confirm("Are you sure you want to apply for this gig?");
    if (!confirmation) return;

    try {
      const response = await fetch(`http://localhost:4000/api/gigs/apply/${gigId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to apply");
      }

      alert("Applied successfully!");

      // ✅ Update the UI to reflect application without reload
      setGig((prevGig) => ({
        ...prevGig,
        applicants: [...prevGig.applicants, userId],
      }));
    } catch (error) {
      console.error("Error applying:", error);
      alert(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!gig) return <p>Gig not found.</p>;

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-bold'>{gig.title}</h1>
      <p>{gig.description}</p>
      <p className='text-blue-500 font-semibold'>Stipend: ${gig.stipend}</p>
      <p><strong>Skills Required:</strong> {gig.skillsRequired.join(', ')}</p>
      <p><strong>Registration Deadline:</strong> {new Date(gig.registrationDeadline).toDateString()}</p>
      <p><strong>Course Duration:</strong> {gig.courseDuration} weeks</p>

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
        onClick={handleApply}
        disabled={gig.applicants.includes(userId)}
      >
        {gig.applicants.includes(userId) ? "Already Applied" : "Apply"}
      </button>
    </div>
  );
};

export default GigDetails;
