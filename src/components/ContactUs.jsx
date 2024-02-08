import Images from "../assets/Images/images"


const ContactUs = () => {
  return (
    <div id="ContactUs" className="flex items-center justify-center flex-wrap-reverse border border-purplish rounded-xl m-4 p-2 md:m-28 md:p-12">
    <div className="md:basis-1/2">
      <h2 className="text-2xl font-semibold mb-4 text-bluish">Contact Us</h2>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-bluish">Name</label>
          <input type="text" id="name" name="name" className="mt-1 p-2 border w-full rounded-md focus:border-purplish"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-bluish">Email</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 border w-full rounded-md focus:border-purplish"/>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-bluish">Message</label>
          <textarea id="message" name="message" rows="4" className="mt-1 p-2 border w-full rounded-md focus:border-purplish"></textarea>
        </div>
        <button type="submit" className="bg-bluish text-white px-4 py-2 rounded-md hover:bg-purplish">Submit</button>
      </form>
    </div>
    <div className="md:basis-1/2">
      <img src={Images.ContactUs} alt="Contact Us" className="object-cover w-full h-full rounded-md" />
    </div>
  </div>
  )
}

export default ContactUs
