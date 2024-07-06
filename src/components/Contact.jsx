import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
return (
    <>
        <div className="bg-lime-50 pb-12">
            <h1 className="text-3xl text-lime-500 font-bold py-8  text-center" id='Contact'>Contact</h1>
            <div className="lg:flex items-center justify-center">
                <div className="p-1 m-12 md:ml-20 bg-lime-500 lg:inline-block lg:w-[35%] rounded-md ">
                    <div className="bg-white p-4 rounded-md">
                        <FontAwesomeIcon icon={faWhatsapp} className='text-lime-600'/>
                        <p className='pl-2 inline-block '>01283203339</p>
                        <hr className="my-4 border-dotted border-lime-500" />
                        <FontAwesomeIcon icon={faPhone} className='text-lime-600'/>
                        <p className='pl-2 inline-block '>01501265265</p>
                    </div>
                </div>
                <div className="p-1 mx-12 md:ml-16 bg-lime-500 lg:inline-block lg:w-[35%] rounded-md ">
                    <div className="bg-white p-4 rounded-md">
                        <FontAwesomeIcon icon={faEnvelope} className="text-lime-600" />
                        <p className='pl-2 inline-block '>better.health@gmail.com</p>
                        <hr className="my-4 border-dotted border-lime-500" />
                        <FontAwesomeIcon icon={faEnvelope} className="text-lime-600" />
                        <p className='pl-2 inline-block '>mthwsamir@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Contact