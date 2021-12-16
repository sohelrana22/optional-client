import React, { useEffect, useState } from "react";
import Service from './../Service/Service';

function Services() {
    const [homes, setHomes] = useState([]);
    useEffect( ()=> {
        fetch("https://fathomless-ocean-60780.herokuapp.com/home_item")
        .then(res => res.json())
        .then((data) => setHomes(data))
    }, [])
    
   
    return (
      <div className="home-body">
            <div>
            <h1 className="text-center text-white">Our House</h1>
          <div className="home-house">
          {
               homes.map(home => <Service home={home}></Service>)
           }
          </div>
          
        </div>
      </div>
    );
}

export default Services;