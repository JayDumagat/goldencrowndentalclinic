import React from "react";

const Services = () => {
    return (
        <div name='services' className="w-full h-screen bg-white text-[#0D2249]">
            <div className="flex flex-col justify-center items-center w-full h-full">
                
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4">
                    
                    <div className="sm:text-right text-center sm:pb-8 pb-4 sm:pl-4 pl-2 sm:text-5xl text-4xl font-extrabold text-[#0D2249] ">
                        
                        <p className="inline border-b-4 border-[#5E92F2]">
                            
                            Services 
                        
                        </p>

                    </div>

                    <div></div>
                    
                </div>
                
                <div className="max-w-[1000px] w-full grid-cols-1 grid sm:grid-cols-2 sm:gap-8 gap-1">
                        <div className="sm:text-lg text-sm text-md sm:pb-8 pb-4 sm:pl-4 pl-2 sm:text-right text-center font-extrabold text-[#0D2249] justify-center">

                            <p>
                        
                            At Golden Crown Dental Clinic, we are committed to providing personalized, 
                            compassionate care to each of our patients. Contact us today to schedule 
                            an appointment and experience the difference at our small dental clinic.
                        
                            </p>

                        </div>

                        <div className="sm:pb-8 pb-4 sm:pl-4 pl-2 sm:text-left text-center sm:text-lg text-sm text-[#0D2249]">
                        
                            <p>
                                We are committed to 
                                providing the highest quality care to our patients. 
                                We offer a wide range of dental services, including
                                general dentistry, cosmetic dentistry, and orthodontics, 
                                to help you achieve optimal oral health and a beautiful smile.

                            </p>
                        
                        </div>

                </div>
                <div className="py-1"></div>
                <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-3 gap-2 align-center sm:text-lg text-xs">
                    <div>
                        <h2 className="font-bold text-center">General</h2>
                        <p className="text-center">
                            Our general dentistry services include routine checkups,
                            cleanings, fillings, and more. We are dedicated to maintaining
                            your oral health and detecting any dental problems early on to 
                            prevent them from becoming more serious issues. Our team of 
                            skilled dental professionals uses the latest techniques and 
                            technologies to ensure that you receive the best possible care.
                        
                        </p>
                    </div>

                    <div>
                        
                        <h2 className="font-bold text-center">Cosmetics</h2>
                        
                        <p className="text-center">
                            If you're looking to improve the appearance of your smile, 
                            we offer a variety of cosmetic dentistry services, such as 
                            teeth whitening, veneers, and crowns. Our team of experienced 
                            dental professionals will work with you to create a personalized 
                            treatment plan that addresses your specific cosmetic concerns 
                            and helps you achieve a smile you'll be proud to show off.

                        </p>

                    </div>

                    <div>

                        <h2 className="font-bold text-center">Orthodonics</h2>
                        
                        <p className="text-center">
                            We offer orthodontic treatments to correct misaligned teeth and jaws,
                            such as braces and clear aligners. Our orthodontic services are designed
                            to improve your oral health, function, and aesthetics. Our team of 
                            orthodontic specialists will work with you to determine the best 
                            treatment plan for your needs and goals.
                        
                        </p>

                    </div>

                </div>
                
            </div>

        </div>
    );
}
export default Services;