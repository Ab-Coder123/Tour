import { useState } from "react";
import PropTypes from 'prop-types';

const offers = [
    {
      id: 1,
      location: 'Alexandria',
      company: 'Company A',
      price: '1500 EGP',
      discount: '10%',
      description: 'Great offer for a wonderful time in Alexandria with a special discount.',
    },
    {
      id: 2,
      location: 'Sharm El Sheikh',
      company: 'Company B',
      price: '3000 EGP',
      discount: '15%',
      description: 'Enjoy the best offers in Sharm El Sheikh with premium services.',
    },
    {
      id: 3,
      location: 'North Coast',
      company: 'Company B',
      price: '3000 EGP',
      discount: '15%',
      description: 'Enjoy the best offers in the North Coast with premium services.',
    }, 
     {
        id: 4,
        location: 'North Coast',
        company: 'Company D',
        price: '6000 EGP',
        discount: '15%',
        description: 'Enjoy the best offers in the North Coast with premium services.',
      },
    // ... add more offers (total 18) ...
  ];
  

const OfferCard = ({offer}) => {
  return (
        
                <> 
                <div className=" cards bg-white w-80 rounded-xl shadow-lg overflow-hidden mb-6  transform transition duration-500 hover:scale-105">
                <div className="bg-blue-500 mix-w-2xl z-30 h-32"></div> {/* Placeholder for image */}
                <div className="p-4">
                  <h2 className="text-lightblue-500 text-2xl font-semibold mb-2">{offer.location}</h2>
                  <p className="text-gray-300 font-medium">{offer.company}</p>
                  <p className="text-gray-500">{offer.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-300 font-bold">{offer.price}</p>
                    {offer.discount && <p className="text-red-500 font-bold">خصم: {offer.discount}</p>}
                  </div>
                  <button className="mt-4 bg-lightblue-500 text-blue-600 *:
                   px-4 py-2 rounded-lg shadow-md hover:bg-lightblue-600 transition">احجز الآن</button>
                </div>
              </div>
                </>
         
       
  );
};

// to not missing offer props 
OfferCard.propTypes = {
    offer: PropTypes.shape({
      location: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      discount: PropTypes.string,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

const Offers = () => {
  const [filter, setFilter] = useState('all');

  const filteredOffers = filter === 'all' ? offers : offers.filter(offer => offer.location === filter);

  return (
    <div className="flex justify-around">
    <div className="w-full max-w-screen-lg px-4">
      <div className="flex justify-around mb-6 py-20">
        <button className="text-lightblue-500" onClick={() => setFilter('all')}>All Offers</button>
        <button className="text-lightblue-500" onClick={() => setFilter('Alexandria')}>Alexandria</button>
        <button className="text-lightblue-500" onClick={() => setFilter('Sharm El Sheikh')}>Sharm El Sheikh</button>
        <button className="text-lightblue-500" onClick={() => setFilter('North Coast')}>North Coast</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {filteredOffers.map(offer => (
          <OfferCard className="cards shadow-blue-400"  key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Offers;
