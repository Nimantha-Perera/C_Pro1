import React from 'react';
import AdsCard from './AdsCard';
import Lottie from 'lottie-react';
import animationData from '../Lottie_animations/animation_ll9dwv4j.json';

export const adsData = [
  {
    adId: 1,
    title: "Samsung Galaxy J1",
    price: '10000',
    location: "Kandy",
    postedTime: "1 hour ago",
  },
  {
    adId: 2,
    title: "iPhone 12",
    price: '75000',
    location: "Colombo",
    postedTime: "2 hours ago",
  },
  {
    adId: 3,
    title: "Sony Bravia 55\" TV",
    price: '55000',
    location: "Galle",
    postedTime: "3 hours ago",
  },
  {
    adId: 4,
    title: "Toyota Corolla 2015",
    price: '2200000',
    location: "Kurunegala",
    postedTime: "4 hours ago",
  },
  {
    adId: 5,
    title: "Dell Inspiron Laptop",
    price: '45000',
    location: "Negombo",
    postedTime: "5 hours ago",
  },
  // ... other ads
];


const CenterContent = () => {
  return (
    <div style={{ marginTop: 50 }}>
      {adsData.length === 0 ? (
        <div style={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
          <Lottie animationData={animationData} style={{ width: '100%' }} className='container' />
        </div>
      ) : (
        adsData.map((ad) => (
          <AdsCard
            key={ad.adId}
            adId={ad.adId}
            title={ad.title}
            price={"Rs" +ad.price}
            location={ad.location}
            description={ad.description}
            postedTime={ad.postedTime}
          />
        ))
      )}
    </div>
  );
};

export default CenterContent;
