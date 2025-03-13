import React from 'react';
import { Link } from 'react-router';
import {useEffect, useState } from 'react';

import '/admin.css';

const Admin = () => {

        const [categories, setCategories] = useState([]);
        const [works, setWorks] = useState([]);
        const [loading, setLoading] = useState(false);
    
        useEffect(() => {
            fetchWorks();
        }, []);


    const fetchWorks = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5678/api/works');
            if (!response.ok) {
                throw new Error('Travaux non trouvées');
            }
            const data = await response.json();
            setWorks(data);
            setFilters(data);
            
        } catch (error) {
            console.error(error);
        }

        if (loading) {
            return <div>Chargement...</div>
        }
    };
    return (
        <>
          <div className="gallery">
                <h1>Gallerie photo</h1>
                {works.map(work => (
                    <figure key={work.id}>
                        <img src={work.imageUrl} alt="Abajour Tahina"/>
                        <div>
                            <img src="/icons/poubelle.png" alt="" />
                        </div>
                    </figure>
                ))}
                <hr />
                <button>Ajouter une photo</button>
			</div> 
        </>
    );
};

export default Admin;