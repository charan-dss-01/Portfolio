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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700">
          <p>AgriConnect</p>
          <DummyContent href="https://agriconnect07.netlify.app/" src="/assets/agri-connect.png"/>
        </div>
      ),
    },
    {
      title: "Weather Masters",
      value: "weathermasters",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700">
          <p>Weather Masters</p>
          <DummyContent src="/assets/wm2.PNG" href="https://weathermasterss.netlify.app/" />
        </div>
      ),
    },
    {
      title: "Event Ease",
      value: "eventease",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700">
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
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h2 className="text-3xl md:text-5xl p-4 font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Live Projects
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
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
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </Link>
  );
};