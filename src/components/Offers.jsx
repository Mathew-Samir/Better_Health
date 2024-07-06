import PropTypes from 'prop-types';

const Offers = ({ links }) => {
    const card = links.map(({ image, title, description, price }, index) => (
        <div key={index} className="card m-5 p-1 bg-lime-500 lg:inline-block lg:w-[30%]  rounded-md">
            <div className="bg-lime-50 rounded-md">
                <img src={image}
                    className="w-full h-40 md:h-60 object-cover rounded-t-md"
                    alt={title}
                />
                <a className="text-slate-500 hover:text-lime-500 text-lg font-bold cursor-pointer px-3">
                    {description}
                </a>
                <p className='px-4 pb-2'>Price {price} EGP</p>
            </div>
        </div> 
    ));

    return (
        <>
            <h1 className="text-3xl text-lime-500 font-bold py-8 lg:mb-8 text-center" id='Offers'>Offers</h1>
            <div className="pb-12 px-6  w-full h-full" >
                {card}
            </div>
        </>
    );
};

Offers.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Offers;
