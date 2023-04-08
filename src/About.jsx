import React from "react";
import './index.css'
const About = () => {
    return(
        
        <div name='about' className="w-full h-screen bg-white text-[#0D2249]">
            
            <div className="flex flex-col justify-center items-center w-full h-full">
                
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4">
                    
                    <div className="sm:text-right text-center sm:pb-8 pb-4 sm:pl-4 pl-2 sm:text-6xl text-4xl font-extrabold text-[#0D2249] ">
                        
                        <p className="inline border-b-4 border-[#5E92F2]">
                            
                            About
                        
                        </p>

                    </div>

                    <div></div>
                    
                </div>
                
                <div className="max-w-[1000px] w-full grid-cols-1 grid sm:grid-cols-2 sm:gap-8 gap-1">
                        <div className="sm:text-2xl text-md sm:pb-8 pb-4 sm:pl-4 pl-2 sm:text-right text-center font-extrabold text-[#0D2249] justify-center">

                            <p>
                        
                                Why Choose Golden Crown Dental Clinic?
                        
                            </p>

                        </div>

                        <div className="sm:pb-8 pb-4 sm:pl-4 pl-2 sm:text-left text-center sm:text-lg text-sm text-[#0D2249]">
                        
                            <p>
                                As a small dental clinic, 
                                we know that choosing a dental care provider is an important decision. 
                                Here are some reasons why we believe our clinic is the right choice for you:

                            </p>
                        
                        </div>

                </div>
                <div className="py-1"></div>
                <div className="max-w-[1000px] w-full grid grid-cols-2 sm:gap-3 gap-2 align-center sm:text-md text-sm">
                    <div>
                        <h2 className="font-bold text-center">Personalized Care:</h2>
                        <p className="text-center">
                        We provide individualized 
                        attention and care to each of our patients. 
                        Our team takes the time to understand your 
                        unique needs and goals, and creates a 
                        personalized treatment plan to help you 
                        achieve optimal oral health.
                        
                        </p>
                    </div>

                    <div>
                        
                        <h2 className="font-bold text-center">Skilled Professionals:</h2>
                        
                        <p className="text-center">
                        Our team consists of experienced and skilled
                        dental professionals who are dedicated to 
                        providing the best possible care to our 
                        patients. We stay up-to-date with the latest
                        techniques and technologies to ensure that 
                        you receive the most advanced and effective 
                        treatments.

                        </p>

                    </div>

                    <div>

                        <h2 className="font-bold text-center">Comprehensive Services:</h2>
                        
                        <p className="text-center">
                        We offer a wide range of dental services, 
                        including preventive care, restorative treatments,
                        cosmetic procedures, and more. Whether you need
                        a routine checkup or a complex treatment, we 
                        have the expertise and resources to meet your needs.
                        
                        </p>
                    </div>

                    <div>

                        <h2 className="font-bold text-center">Affordable Care:</h2>
                        
                        <p className="text-center">
                        We believe that everyone deserves access to quality 
                        dental care, which is why we strive to keep our 
                        services affordable and accessible to all. We work 
                        with our patients to find the best payment 
                        options and insurance coverage to fit their budgets.
                        </p>

                    </div>

                </div>
                
            </div>

        </div>
    );
}
export default About;