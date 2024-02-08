/* eslint-disable react/prop-types */


const ServiceCard = ({title, details , image}) => {
  return (
    <div className="mx-4 mb-4 p-8 border-2 border-purplish rounded-lg hover:mb-6 hover:cursor-pointer">
      <div className="flex justify-center items-center flex-col">
        <img className='w-56 bg-cream-onion-green' src={image} />
        <h1 className="text-center mt-5 font-semibold text-xl">{title}</h1>
        <p className="text-center font-semibold">{details}</p>
       </div>
    </div>
  )
}

export default ServiceCard
