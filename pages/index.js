import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/hasanashrafi/repos`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setProjects(data))
      .catch(error => console.error('Failed to fetch projects:', error));
  }, []);

  // Filter projects to only include those with a non-null homepage
  const filteredProjects = projects.filter(project => project.homepage !== null);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-wrap justify-center z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.node_id} className="bg-white w-60 h-40 border rounded m-1">
              <img src={project.owner.avatar_url} className="rounded-full size-12 m-2 mx-auto" />
              <p className="p-4 w-full">{project.name}</p>
              <div className="flex justify-center p-1 w-full">
                <Link href={`${project.homepage}`}
                  className="w-full text-center text-white bg-blue-600 p-1 rounded">
                  {project.name} Demo
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No projects with a homepage available.</p>
        )}
      </div>
    </main>
  );
}