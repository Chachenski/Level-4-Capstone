import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Crypto from './Crypto';


function Exchanges() {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/derivatives/exchanges')
    .then(res => {
      setExchanges(res.data)
    }).catch(error => console.log(error))
    }, []);

  console.log(exchanges)

  const filteredExchanges = exchanges.filter(exchange =>
    exchange.name.toLowerCase()
  )

  console.log(filteredExchanges)


  return (
    <div>
      {filteredExchanges.map(exchange => {
        return (
          <Crypto 
          name={exchange.name}
          image={exchange.image}
          country={exchange.country}
          url={exchange.url}
          />
        )
      })}
    </div>
    )
}

export default Exchanges