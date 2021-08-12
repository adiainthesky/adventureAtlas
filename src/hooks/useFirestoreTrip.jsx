import { UnsupportedMediaType } from 'http-errors';
import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] =useState([]);

    useEffect(() => {
        // unsub = unsubscribe => to stop listening to this collection (ie, if we want to unmount from imgGrid)
        const unsub = db.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            })
        // this is a 'clean-up method' (unsubscribing from teh collecction when we no longer need it)    
        return () => unsub();

    }, [collection])

    return docs;
}

export default useFirestore