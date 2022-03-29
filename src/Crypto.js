import React from 'react';

const Crypto = ({ image, name, country, url}) => {
  return (
    <div className='crypto-container'>
        <div className='crypto-row'>
            <div className='crypto'>
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p>{country}</p>
                <p>{url}</p>
            </div>
        </div>
    </div>
  )
}

export default Crypto;