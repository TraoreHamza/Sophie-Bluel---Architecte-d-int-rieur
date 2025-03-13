import React from 'react';

import './works.css';
const Works = ({gallery}) => {

    return (
        <>
             <div class="modal">
        <div class="header">
            <button class="close">×</button>
            <h2>Galerie photo</h2>
        </div>
          <div className="gallery__work">
                {gallery.map(work => (
                <div  key={work.id} class="image-card">
                     <img src={work.imageUrl} alt="Abajour Tahina" />
                     <button class="delete"><img src="/icons/poubelle.png" alt="" /></button>
                 </div>    
                ))}
			</div> 
            <hr />
            <button class="add-photo">Ajouter une photo</button>
        </div> 
        </>
    );
};

export default Works;