import React from 'react';
import './add.css';
const Add = () => {
    
    return (
        <>
        <div class="modal">
        <div class="header">
            <button className='return'></button>
            <button class="close">×</button>
            <h2>Galerie photo</h2>
        </div>
          <form className="form">
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email"/>
                <label htmlFor="name">Catégorie</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
            <hr />
            <button class="add-photo">Ajouter une photo</button>
        </form> 
        </div>  
        </>
    );
};

export default Add;