import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const List = ({ token }) => {
  const [gigs, setGigs] = useState([]);
  const [selectedGig, setSelectedGig] = useState(null);
  const navigate = useNavigate();

  // Fetch all gigs
  const fetchGigs = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/gigs/list`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Fetched Gigs:", response.data); // Debugging
      if (response.data.success) {
        setGigs(response.data.gigs.reverse());
      } else {
        toast.error("Failed to load gigs");
      }
    } catch (error) {
      console.error("Error fetching gigs:", error);
      toast.error("Error fetching gigs");
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  // Toggle gig selection
  const handleGigClick = (gig) => {
    setSelectedGig(selectedGig?._id === gig._id ? null : gig);
  };

  // Approve or Reject student
  const handleApproval = async (gigId, studentId, action) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/gigs/update-status/${gigId}`,
        { studentId, action },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success(`Student ${action}d successfully`);
        fetchGigs(); // Refresh data after update
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating status");
    }
  };

  return (
    <>
      <p className="mb-2 font-bold text-lg">All Gigs List</p>
      <div className="flex flex-col gap-2">
        {/* ------- Table Header ---------- */}
        <div className="hidden md:grid grid-cols-[2fr_3fr_1fr] items-center py-2 px-2 border bg-gray-100 text-sm font-semibold">
          <b>Title</b>
          <b>Description</b>
          <b>No. of Applicants</b>
        </div>

        {/* ------ Gig List ------ */}
        {gigs.map((gig) => (
          <div key={gig._id} className="border p-3">
            <div
              className="grid grid-cols-[2fr_3fr_1fr] items-center cursor-pointer"
              onClick={() => handleGigClick(gig)}
            >
              <p className="font-bold text-blue-600 hover:underline">{gig.title}</p>
              <p>{gig.description.substring(0, 50)}...</p>
              <p className="text-center font-semibold">{gig.applicants.length}</p>
            </div>

            {/* ------ Applicants List (Expandable) ------ */}
            {selectedGig?._id === gig._id && (
              <div className="mt-3 p-2 border-t">
                <p className="font-bold mb-2">Applicants</p>
                {gig.applicants.length > 0 ? (
                  gig.applicants.map((student) => (
                    <div key={student._id} className="flex justify-between items-center p-2 border rounded-lg">
                      <p
                        className="text-blue-500 cursor-pointer hover:underline"
                        onClick={() => navigate(`/student/${student._id}`)}
                      >
                        {student.name}
                      </p>
                      <div className="flex gap-2">
                        <button
                          className="px-3 py-1 bg-green-500 text-white rounded"
                          onClick={() => handleApproval(gig._id, student._id, "approve")}
                        >
                          ✔ Approve
                        </button>
                        <button
                          className="px-3 py-1 bg-red-500 text-white rounded"
                          onClick={() => handleApproval(gig._id, student._id, "reject")}
                        >
                          ❌ Reject
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No applicants yet.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
