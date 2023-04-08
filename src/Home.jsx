import react from 'react';
import {Link} from 'react-scroll';
const Home = () => {
    const phoneNumber = "0917 241 5685";

    return (
        <div name ='home' className='w-full h-screen bg-[#5E92F2] '>

            {/**/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='sm:text-7xl font-bold text-5xl text-[#FEF6A0]'>GOLDEN CROWN</h1>
                <h2 className='sm:text-7xl font-bold text-5xl text-[#FEF6A0]'>DENTAL CLINIC</h2>
                <p className='sm:text-xl  text-lg text-gray-100 max-w-[700px]'>Transform your smile, transform your life by visiting our dental clinic today!</p>

                <div>
                    <button className='bg-white text-[##5E92F2] font-bold py-4 px-8 rounded text-xl hover:bg-[#0D2249] hover:text-[#FEF6A0] duration-300'>
                        <Link to="contact" smooth={true} duration={500}>
                            Book Now
                        </Link>
                    </button>
                    <p className="text-lg text-white mt-6">
                        Or call us at{" "}
                        <a href={`tel:${phoneNumber}`} className="underline">
                            {phoneNumber}
                        </a>{" "}
                        to book an appointment
                    </p>
                </div>
            </div>

        </div>
    );
}
export default Home;