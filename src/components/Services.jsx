import Images from "../assets/Images/images"
import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <div  id="Services">
      <div className="flex items-center justify-center">
        <ServiceCard title={"WEBSITE DESIGNING"} details={""} image={Images.websiteDesign} />
        <ServiceCard title={"DIGITAL MARKETING"} details={""} image={Images.digitalMarketing}/>
        <ServiceCard title={"ANDRIOD DEVELOPMENT"} details={""} image={Images.andriodDevelopment} />
      </div>
    </div>
  )
}

export default Services
