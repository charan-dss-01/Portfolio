'use client'
import { useState, useEffect } from 'react';
import HeroSection from "@/components/HeroSection";
import FeturedCourses from "@/components/FeturedCourses";
import About from "@/components/About";
import TestmonialCards from "@/components/TestmonialCards";
import Projects from "@/components/Projects";
import Skills from "@/components/FeturedCourses";
import Contact from "@/components/Contact";
import Loader from "@/components/ui/loader";
import { LiveProjects } from '@/components/LiveProjects';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <section id="home">
        <HeroSection/>
      </section>
      
      <section id="about">
        <About/>
      </section>
      
      <section id="skills">
        <Skills/>
      </section>
      
      <section id="journey">
        <TestmonialCards/>
      </section>

      <section id="projects">
        <Projects/>
      </section>
      
      <section id="live-projects">
        <LiveProjects/>
      </section>
      
      <section id="contact">
        <Contact/>
      </section>
    </main>
  )
}
