import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Collection = () => {
  const [gigs, setGigs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:4000/api/gigs/list', {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        const data = await response.json();
        console.log("Fetched Gigs Data:", data); // Debug API response
  
        if (data.success) {
          setGigs(data.gigs);
        }
      } catch (error) {
        console.error('Error fetching gigs:', error);
      }
    };
    fetchGigs();
  }, []);
  
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-bold my-4'>All Gigs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {gigs.length > 0 ? (
          gigs.map((gig) => (
            <div 
              key={gig._id} 
              className='border p-4 rounded-lg shadow-lg cursor-pointer' 
              onClick={() => navigate(`/gigs/${gig._id}`)}
            >
              <h2 className='text-xl font-semibold'>{gig.title}</h2>
              <p className='text-gray-600'>{gig.description}</p>
              <p className='text-blue-500 font-semibold'>Stipend: ${gig.stipend}</p>
              <p className='text-gray-500'>Skills: {gig.skillsRequired.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No gigs available.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
  