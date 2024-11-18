import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        a passionate and skilled full-stack developer with expertise in
        crafting efficient and user-focused web solutions. With a deep
        understanding of both front-end and back-end technologies, {profile?.user?.name} is
        driven to create seamless and impactful digital experiences.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise:
      </h2>
      <p>
        Front-End: Proficient in React.js, HTML5, CSS3, and responsive design
        techniques. Skilled in developing dynamic and visually engaging
        interfaces tailored to user needs. Back-End: Experienced in building
        robust server-side logic using Node.js and Express.js. Adept at managing
        databases like MongoDB and MySQL, ensuring optimal performance and
        scalability. Development Workflow: Knowledgeable in Git version control
        and collaborative coding practices. Familiar with CI/CD tools for
        streamlined deployments. MERN Stack Specialist: Skilled in end-to-end
        development using the MERN stack, efficiently handling complex project
        requirements from conception to delivery.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Professional Highlights:
      </h2>
      <p>
        Successfully designed and developed a comprehensive Club Management
        System, enhancing event organization and user interaction within
        educational institutions. Continuously explores and integrates emerging
        technologies to stay ahead of industry trends. Known for problem-solving
        skills and the ability to collaborate effectively within teams to
        deliver high-quality projects on time.
      </p>
      <br />
      <span>
      {profile?.user?.name} is committed to applying his knowledge and skills to innovate and
        build solutions that positively impact users and clients. He thrives on
        challenges and takes pride in delivering results that exceed
        expectations.
      </span>
      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests and Inspiration:
      </h2>
      <p>
        Outside of coding, {profile?.user?.name} is an avid fan of cricket and admires{" "}
        <strong>King Kohli</strong> for his dedication and resilience. His
        family, especially his parents and siblings, serve as his biggest
        motivation, constantly inspiring him to achieve new heights in both his
        personal and professional life.
      </p>
    </div>
  );
}

export default About;
