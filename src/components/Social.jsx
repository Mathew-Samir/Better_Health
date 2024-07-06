import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
return (
    <>
        <div className="bg-slate-800 py-4 text-white">
            <h1 className="text-3xl font-bold pt-4 text-center lg:mb-12 ">Social</h1>
            <div className="lg:flex items-center lg:justify-around">
                <div className="py-4 text-center ">
                    <div className="md:mr-10">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 " />
                        <p className='inline-block px-2 font-bold'>Location: El_Zamalek </p>
                    </div>
                    <div className="p-1 bg-lime-500 w-[75%] lg:w-[140%] mt-2 rounded-md mx-11 lg:mx-0">
                        <a href="https://maps.app.goo.gl/Fwu5BppgP5iA5FN2A">
                            <img src={'https://discoverdiscomfort.com/wp-content/uploads/2018/12/Best-Neighbourhoods-in-Cairo-Zamalek-Gezira-768x520.jpg'}
                            className="w-full h-40 md:h-30 object-cover rounded-md"
                            alt='location'
                        />
                        </a>    
                    </div>
                </div>
                <div className="md:mt-12 mt-4 ml-7 mb-8">
                    <a href="https://www.facebook.com/profile.php?id=61560150504438" className='rounded-full bg-white p-2 mx-2'>
                        <FontAwesomeIcon icon={faFacebook}
                        className="text-blue-600 hover:text-blue-800 text-2xl" />
                    </a>
                    <a href="https://twitter.com/example" className='rounded-full bg-white p-2 mx-3'>
                        <FontAwesomeIcon icon={faTwitter}
                        className="text-blue-400 hover:text-blue-600 text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/example" className='rounded-full bg-white p-2 mx-3'>
                        <FontAwesomeIcon icon={faInstagram}
                        className="text-pink-600 hover:text-pink-800 text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/example" className='rounded-full bg-white p-2 mx-3'>
                        <FontAwesomeIcon icon={faLinkedin}
                        className="text-blue-800 hover:text-blue-900 text-2xl" />
                    </a>
                    <a href="https://t.me/example" className='rounded-full bg-white p-2 mx-3'>
                        <FontAwesomeIcon icon={faTelegram}
                        className="text-blue-500 hover:text-blue-700 text-2xl" />
                    </a>
                </div>
            </div>
            <hr className=" border border-lime-800 mx-6 " />
            <div className="py-4">
                <p className="text-center">©2024 All rights reserved.
                    <a href='https://www.linkedin.com/in/mathew-samir/'
                    className='font-bold text-lime-500'>Better Health.</a>
                </p>
            </div>
        </div>
        
    </>
)
}

export default Social