import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
return (
    <>
        <div className="bg-slate-800 py-4 text-white" id='Social'>
            <h1 className="text-3xl font-bold pt-4 text-center lg:mb-12 ">Social</h1>
            <div className="lg:flex items-center lg:justify-around">
                <div className="py-4 text-center ">
                    <div className="md:mr-10">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 " />
                        <p className='inline-block px-2 font-bold'>Location: El_Zamalek </p>
                    </div>
                    <div className="p-1 bg-lime-500 w-[77%] lg:w-[150%] lg:h-[16em]  mt-2 rounded-md mx-11 lg:mx-0">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27626.
                            696971608086!2d31.2217712!3d30.05586975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                            1!3m3!1m2!1s0x145840e059d98225%3A0x91cb6f582e8b215c!2sZamalek%2C%20Cairo%
                            20Governorate!5e0!3m2!1sen!2seg!4v1728309690412!5m2!1sen!2seg" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }}  // Fixed style prop
                            allowFullScreen=""  // Fixed camelCase prop
                            loading="lazy">
                        </iframe>
                        {/* <a href="https://maps.app.goo.gl/Fwu5BppgP5iA5FN2A">
                            <img src={'https://discoverdiscomfort.com/wp-content/uploads/2018/12/Best-Neighbourhoods-in-Cairo-Zamalek-Gezira-768x520.jpg'}
                            className="w-full h-40 md:h-30 object-cover rounded-md"
                            alt='location'
                            />
                        </a>     */}
                    </div>
                </div>
                <div className="md:mt-12 mt-4 mb-8 flex items-center justify-center">
                    <a href="https://www.facebook.com/profile.php?id=61560150504438" className='rounded-full bg-white p-3 mx-2'>
                        <FontAwesomeIcon icon={faFacebook}
                        className="text-blue-600 hover:text-blue-800 text-2xl" />
                    </a>
                    <a href="https://x.com/MathewSamir1" className='rounded-full bg-white p-3 mx-2'>
                        <FontAwesomeIcon icon={faTwitter}
                        className="text-blue-400 hover:text-blue-600 text-2xl" />
                    </a>
                    <a href="#" className='rounded-full bg-white p-3 mx-2'>
                        <FontAwesomeIcon icon={faInstagram}
                        className="text-pink-600 hover:text-pink-800 text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/mathew-samir/" className='rounded-full bg-white p-3 mx-2'>
                        <FontAwesomeIcon icon={faLinkedin}
                        className="text-blue-800 hover:text-blue-900 text-2xl" />
                    </a>
                    <a href="#" className='rounded-full bg-white p-3 mx-2'>
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
