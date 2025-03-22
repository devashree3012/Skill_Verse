import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Ongoing = ({ token }) => {
  const [ongoingGigs, setOngoingGigs] = useState([]);

  const fetchOngoingGigs = async () => {
    if (!token) return;

    try {
      const response = await axios.get(backendUrl + '/api/gig/ongoing', { headers: { token } });
      if (response.data.success) {
        setOngoingGigs(response.data.gigs.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleReviewSubmit = async (gigId, studentId, review) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/gig/review',
        { gigId, studentId, review },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success('Review submitted successfully');
        fetchOngoingGigs();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePayment = async (gigId, studentId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/gig/complete',
        { gigId, studentId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success('Payment processed and gig closed!');
        fetchOngoingGigs();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOngoingGigs();
  }, [token]);

  return (
    <div>
      <h3 className='text-lg font-bold mb-4'>Ongoing Gigs</h3>
      <div className='flex flex-col gap-3'>
        {ongoingGigs.length > 0 ? (
          ongoingGigs.map((gig, index) => (
            <div key={index} className='border p-4 rounded-lg shadow-md'>
              <h4 className='font-bold text-blue-600'>{gig.title}</h4>
              <p className='text-sm text-gray-600 mb-2'>{gig.description}</p>
              <p className='text-sm text-gray-800 font-semibold'>
                Stipend: ${gig.stipend} | Duration: {gig.duration}
              </p>

              <div className='mt-3'>
                <h5 className='font-bold mb-2'>Selected Student</h5>
                <div className='flex justify-between items-center border p-2 rounded-lg'>
                  <p
                    className='text-blue-500 cursor-pointer hover:underline'
                    onClick={() => window.open(`/student/${gig.student.id}`, '_blank')}
                  >
                    {gig.student.name}
                  </p>
                  <button
                    className='bg-green-500 text-white px-3 py-1 rounded'
                    onClick={() => handlePayment(gig._id, gig.student.id)}
                  >
                    Process Payment & Close Gig
                  </button>
                </div>
              </div>

              <div className='mt-3'>
                <h5 className='font-bold mb-2'>Review Work</h5>
                <textarea
                  className='w-full border p-2 rounded-md'
                  placeholder='Leave feedback for the student...'
                  onBlur={(e) => handleReviewSubmit(gig._id, gig.student.id, e.target.value)}
                ></textarea>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No ongoing gigs.</p>
        )}
      </div>
    </div>
  );
};

export default Ongoing;
