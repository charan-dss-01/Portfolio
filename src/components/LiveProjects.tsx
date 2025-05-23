"use client";
 
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
 
export function LiveProjects() {
  const tabs = [
    {
      title: "AgriConnect",
      value: "agriconnect",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-lg sm:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700 min-h-[220px] sm:min-h-0">
          <p>AgriConnect</p>
          <DummyContent href="https://agriconnect07.netlify.app/" src="/assets/agri-connect.png"/>
        </div>
      ),
    },
    {
      title: "Weather Masters",
      value: "weathermasters",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-lg sm:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700 min-h-[220px] sm:min-h-0">
          <p>Weather Masters</p>
          <DummyContent src="/assets/wm2.PNG" href="https://weathermasterss.netlify.app/" />
        </div>
      ),
    },
    {
      title: "Event Ease",
      value: "eventease",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-lg sm:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700 min-h-[220px] sm:min-h-0">
          <p>Event Ease</p>
          <DummyContent src="/assets/ee.png" href="https://event-ease-one.vercel.app/" />
        </div>
      ),
    },
    // {
    //   title: "Cipher Hub",
    //   value: "cipherhub",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Cipher Hub</p>
    //       <DummyContent src="/assets/pic11.PNG" href="" />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="hidden sm:flex flex-col h-auto sm:h-[40rem] [perspective:1000px] relative max-w-5xl mx-auto w-full items-start justify-start my-20 sm:my-40">
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <h2 className="text-2xl sm:text-5xl p-2 sm:p-4 font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Live Projects
        </h2>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          Explore my latest web development work
        </p>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}
 
const DummyContent = ({src,href}:{src:string,href:string}) => {
  return (
    <Link href={href} target="_blank">
      <Image
        src={src}
        alt="Project preview"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[120px] sm:h-[90%] absolute left-1/2 -translate-x-1/2 bottom-0 sm:-bottom-10 w-[90%] rounded-xl mx-auto"
      />
    </Link>
  );
};