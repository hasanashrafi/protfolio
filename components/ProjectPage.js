import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data.data); // Update this line to access the correct data structure
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="text-[#15F5BA] min-h-screen flex flex-wrap justify-center mx-auto  p-5 gap-2 max-w-5xl w-full items-center font-mono text-sm">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.id} className="p-1 flex flex-col justify-around relative bg-white/5 w-60 h-72 m-4   rounded-lg">
            <img
              src={project.image}
              alt={project.name}
              className=" rounded-xl shadow-xl  mx-auto  "
            />
            <p className="p-2 w-full mt- text-center">{project.name}</p>
           
            
              <Link href={project.url}>
                <p className="w-full text-center text-white bg-blue-500 transition-colors ease-in-out hover:bg-blue-700 p-1 rounded">
                  {project.name} Demo
                </p>
              </Link>
           

          </div>
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

export default ProjectPage;