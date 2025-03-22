import { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = ({ userId }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    education: [{ degree: "", institution: "", year: "" }],
    projects: [{ title: "", description: "", link: "" }],
    skills: [],
  });

  useEffect(() => {
    axios.get(http://localhost:5000/api/profile/${userId}).then((res) => {
      if (res.data) setProfile(res.data);
    });
  }, [userId]);

  const handleChange = (e, field, index) => {
    const newProfile = { ...profile };
    if (Array.isArray(profile[field])) {
      newProfile[field][index][e.target.name] = e.target.value;
    } else {
      newProfile[field] = e.target.value;
    }
    setProfile(newProfile);
  };

  const saveProfile = () => {
    axios.post("http://localhost:5000/api/profile/update", { userId, ...profile }).then(() => {
      alert("Profile Updated");
    });
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold">Edit Profile</h2>
      <input className="block w-full p-2 border" name="name" value={profile.name} onChange={(e) => handleChange(e, "name")} />
      <input className="block w-full p-2 border mt-2" name="email" value={profile.email} onChange={(e) => handleChange(e, "email")} />

      <h3 className="text-lg font-bold mt-4">Education</h3>
      {profile.education.map((edu, index) => (
        <div key={index} className="border p-2">
          <input name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, "education", index)} className="block w-full" />
          <input name="institution" placeholder="Institution" value={edu.institution} onChange={(e) => handleChange(e, "education", index)} className="block w-full mt-1" />
          <input name="year" placeholder="Year" value={edu.year} onChange={(e) => handleChange(e, "education", index)} className="block w-full mt-1" />
        </div>
      ))}

      <h3 className="text-lg font-bold mt-4">Projects</h3>
      {profile.projects.map((proj, index) => (
        <div key={index} className="border p-2">
          <input name="title" placeholder="Project Title" value={proj.title} onChange={(e) => handleChange(e, "projects", index)} className="block w-full" />
          <input name="description" placeholder="Description" value={proj.description} onChange={(e) => handleChange(e, "projects", index)} className="block w-full mt-1" />
          <input name="link" placeholder="Project Link" value={proj.link} onChange={(e) => handleChange(e, "projects", index)} className="block w-full mt-1" />
        </div>
      ))}

      <h3 className="text-lg font-bold mt-4">Skills</h3>
      <input name="skills" className="block w-full p-2 border" placeholder="Enter skills separated by commas" value={profile.skills.join(", ")} onChange={(e) => setProfile({ ...profile, skills: e.target.value.split(", ") })} />

      <button onClick={saveProfile} className="bg-blue-500 text-white px-4 py-2 mt-4">Save</button>
    </div>
  );
};

export default ProfilePage;