import React from 'react';
import { Link } from 'react-router-dom';
import './AdsCard.css';

const AdsCard = ({ adId, title, price, location, description, postedTime }) => {
  return (
    <Link to={`/ad/${adId}`} className="card card_alls" style={{ display: 'flex', flexDirection: 'row', marginTop: 10, cursor: "pointer" ,textDecoration:"none"}}>
      <img
        src="https://via.placeholder.com/150"
        alt="Sample Ad"
        className='img_sli'
        style={{ width: '150px', height: '150px', marginRight: '10px' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
        <h5 className="card-title crd_tits" style={{}}>{title}</h5>
        <p className="card-text price_vv">
       {price}
        </p>
        <p className="card-text" style={{ fontSize: 14 }} id='des_loc'>
          {location}
        </p>
        <p className="card-text time" style={{ float: 'right' }}>
          {postedTime}
        </p>
        <p className="card-text" style={{ fontSize: 14 }}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default AdsCard;
