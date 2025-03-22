import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';  // Ensure backend URL is correct
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddGig = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stipend, setStipend] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [registrationDeadline, setRegistrationDeadline] = useState("");
  const [courseDuration, setCourseDuration] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (stipend < 0) {
      return toast.error("Stipend cannot be negative");
    }

    try {
      const gigData = {
        title,
        description,
        stipend: Number(stipend),
        skillsRequired: skillsRequired.split(',').map(skill => skill.trim()),
        registrationDeadline,
        courseDuration: Number(courseDuration),
      };

      const response = await axios.post(`${backendUrl}/api/gigs/add`, gigData, { 
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setTitle('');
        setDescription('');
        setStipend('');
        setSkillsRequired('');
        setRegistrationDeadline('');
        setCourseDuration('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add gig!");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">Add a New Gig</h2>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" placeholder="Gig title" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" placeholder="Gig description" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Skills Required (comma separated)</label>
          <input type="text" value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" placeholder="e.g. React, Python, UI/UX" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Stipend</label>
          <input type="number" value={stipend} onChange={(e) => setStipend(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" placeholder="Enter stipend amount" required min="0" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Registration Deadline</label>
          <input type="date" value={registrationDeadline} onChange={(e) => setRegistrationDeadline(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Course Duration (in weeks)</label>
          <input type="number" value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" placeholder="Enter duration" required min="1" />
        </div>

        <button type="submit" className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg">Add Gig</button>
      </form>
    </div>
  );
};

export default AddGig;
