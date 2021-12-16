import { useEffect, useState } from "react";


const useServices = () => {
    const [home_item, setHome_item] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/home_item')
        .then(res => res.json())
        .then((data) => setHome_item(data))
    },[]);

    return {home_item, setHome_item};
};

export default useServices;