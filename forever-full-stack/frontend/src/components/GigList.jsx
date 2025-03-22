import React, { useEffect, useState } from "react";

const GigList = () => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZGQ4NzI4MGRhNGY5NGE5NmEyMzAwMSIsImlhdCI6MTc0MjYyNjkyOCwiZXhwIjoxNzQyNjMwNTI4fQ.2MJ1SvwuWBMoCSdl_twhANcEU_J-w4gE79RHmEse25s"; // 🔥 Replace with actual token logic
        const response = await fetch("http://localhost:4000/api/gigs/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (data.success) {
          setGigs(data.gigs);
        } else {
          console.error("Failed to fetch gigs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching gigs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading gigs...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Gigs</h1>
      {gigs.length === 0 ? (
        <p>No gigs available.</p>
      ) : (
        <ul className="space-y-4">
          {gigs.map((gig) => (
            <li key={gig._id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{gig.title}</h2>
              <p className="text-gray-600">{gig.description}</p>
              <p className="text-sm text-blue-500">Stipend: ${gig.stipend}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GigList;
