import { MarqueeDemo } from "@/components/MarqueeCompo";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(() => {
    const profileCard = document.getElementById('profile_card');
    profileCard.classList.add('animate');
  }, []);


  return (
    <main
      className={` text-gradient-dark bg-background flex min-h-screen flex-col items-center justify-around p-4 ${inter.className}`}
    >
      <div className="p-3 h-96   w-full items-center flex flex-col  justify-center" id="head_detail">
        <h1 className="text-center text-blue-800 m-1 text-7xl font-bold text-secondary">Hasan Ashrafi</h1>
        <p className="text-base text-blue-700  text-center">Welcome to my portfolio!</p>
      </div>

      <div className="flex flex-col justify-center">
        <div id="profile_card" className="flex flex-col p-2 md:flex-row items-center gap-2 shadow-sm bg-[#f0f3ff] border  w-full lg:w-1/2 mx-auto rounded-md ">
          <Image src="/images/profile.jpg" width={200} height={200} className="shadow-md hover:scale-110 transition-all ease-in-out rounded-xl" />
          <p className="text-gradient text-justify">
            Hi,
            <br />
            I am a software developer with a passion for building scalable and efficient solutions.
            I have experience with a range of technologies, including JavaScript, Python, and SQL.
            I am excited to share my projects and experiences with you.
            my goal is to create a portfolio that showcases my skills and experience.
          </p>
        </div>
        <Link href="/projects" className=" w-fit text-center self-center  border rounded-2xl p-2 mt-4 mx-auto text-white hover:bg-white/50 ease-in-out transition-all ">
          View My Projects
        </Link>
      </div>


      <MarqueeDemo />

    </main>
  );
}