import { db } from '../firebase/config';
import { useState, useEffect } from 'react';

const useData = (collection) => {
    const [trips,setTrips]= useState([]);

    const fetchLoctions=async()=>{
        const response=db.collection('collection');
        const data=await response.get();
        data.docs.forEach(item=>{
        setTrips([...trips,item.data()])
        })
    }
    useEffect(() => {
        fetchLoctions();
    }, [])

    return { trips }
}

export default useData;