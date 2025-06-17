import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import { HoverEffect } from '../UI/card-hover-effect'

const ServiceSection = () => {
  return (
    <section id="services" className="my-14">
      <SectionHeading
        title="// Services / Offers:"
        subtitle="I offer a wide range of services to ensure you have the best written code and stay ahead in the competition."
      />

      <HoverEffect 
        items={serviceData} 
        className="mt-8 md:mt-[3.75rem]" 
      />
    </section>
  )
}

export default ServiceSection