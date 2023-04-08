import React from "react";
const Contact = () => {
    return(
        <div name='contact' className="w-full h-max-[100%] flex justify-center items-center p-4 b">
            
            <div className="flex flex-col justify-center items-center w-full h-full">
                
                <div className="max-w-[1000px] w-full grid sm:grid-cols-1 grid-cols-1 sm:gap-8 gap-4">
                    
                    <div className="sm:text-center text-center sm:pb-8 pb-4 sm:pl-4 pl-2 sm:text-6xl text-4xl font-extrabold text-[#0D2249] ">
                        
                        <h1 className="inline border-b-4 border-[#5E92F2]">
                            Contact Us
                            
                        
                        </h1>

                    </div>


                </div>

                <div className="max-w-[1000px] w-full grid-cols-1 grid sm:grid-cols-2 sm:gap-8 gap-1">
                    
                    <div className="bg-gray-50 rounded-3xl shadow-2xl p-5 size">
                    
                        <form action="https://getform.io/f/532bf007-92f2-42a1-b9bd-87c3b8826d9e" method="POST" className="flex flex-col gap-4">
                            <label className="text-xl font-bold text-[#5E92F2]">Set an Appointment</label>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" className="bg-gray-20 rounded-md" required />

                            <label htmlFor="phone">Phone number:</label>
                            <input type="tel" id="phone" name="phone" className="bg-gray-20 rounded-md" required />

                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" name="date" className="bg-gray-20 rounded-md" required />

                            <label htmlFor="time">Time:</label>
                            <input type="time" id="time" name="time" className="bg-gray-20 rounded-md" required />

                            <label htmlFor="reason">Reason for Appointment:</label>
                            <textarea id="reason" name="reason" rows="3" className="bg-gray-20 "></textarea>

                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                            Submit
                            </button>

                        </form>

                    </div>

                    <div className="bg-gray-50 rounded-3xl shadow-2xl p-8 ">
                        <h2 className="text-xl font-bold mb-4" style={{ color: '#5E92F2' }}>Opening Hours</h2>
                        <ul className="list-disc pl-6">
                            <li>Monday - Saturday: 8am - 12pm, 1:30pm - 6pm</li>
                            <li>Sunday: 9am - 12pm</li>
                            <h1>We are located here! (this is just a sample map)</h1>
                            <div className="align-reight">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186188.40192231253!2d-74.16375589101183!3d40.69278883369932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c251b84da1718f%3A0xa95b6e87144e4107!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sph!4v1648773912205!5m2!1sen!2sph" width="300px" height="300px" allowFullScreen="true" loading="lazy"></iframe>
                            </div>
                        </ul>
                        

                    </div>

                </div>

            </div>


        </div>
    );
}
export default Contact;