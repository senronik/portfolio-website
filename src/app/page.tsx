import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
// import TestimonialSection from '@/components/Testimonials/TestimonialSection'
import { getAllProjects } from '@/services'
// import { HoverEffect } from '@/components/UI/card-hover-effect'


export default async function Home() {
  const projects = await getAllProjects()
  
  return (
    <main>
      <Hero />
      {/* <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects2} />
      </div> */}
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection projects={projects} />
        <ServiceSection />
        {/* <TestimonialSection testimonials={testimonials} /> */}
        <ContactSection />
      </div>
    </main>
  )
}

