import React from 'react';
import { useState, useEffect } from 'react';

import './Home.css'
const Home = () => {

    const [categories, setCategories] = useState([]);
    const [works, setWorks] = useState([]);
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();

        // Recuperer les catégories et les travaux
        useEffect(() => {
            fetchCategories();
            fetchWorks();
        }, []);
    
        useEffect(() => {
            if (selectedCategory === undefined) {
                setFilters(works);
                return;
            }
            setFilters(works.filter(work => work.categoryId == selectedCategory))
        }, [selectedCategory])
    
    


    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5678/api/categories');
            if (!response.ok) {
                throw new Error('Catégories non trouvées');
            }
            const data = await response.json();
            setCategories(data);
        } catch (error) {
        console.error(error);
        }
    };

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

    //   // Filtrer les travaux 
    // const filterWorks = (categoryId) => {
    // const filtered = works.filter(work => work.categoryId === categoryId);
    // setFilters(filtered);
    // setDefaults(categoryId);
    
    // };

    return (
        <>
	<main>
		<section id="introduction">
			<figure>
				<img src="/images/sophie-bluel.png" alt=""/>
			</figure>
			<article>
				<h2>Designer d'espace</h2>
				<p>Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison
					finale du chantier.</p>
				<p>Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les
					couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du
					chantier sera assuré dans le souci du détail, le respect du planning et du budget.</p>
				<p>En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG,
					décorateur(trice)</p>
			</article>
		</section>
		<section id="portfolio">
			<h2>Mes Projets</h2>
            <div className='buttons'>
            <button className={!selectedCategory ? 'active' : ''} onClick={() => setSelectedCategory()}>Tous</button>
            {categories.map(category => (
                <button key={category.id} className={selectedCategory == category.id ? 'active' : ''} onClick={() => setSelectedCategory(category.id)}>{category.name}</button>
            ))}
            </div>
			<div className="gallery">
                {filters.map(work => (
                    <figure key={work.id}>
                        <img src={work.imageUrl} alt="Abajour Tahina"/>
                        <figcaption>{work.title}</figcaption>
                    </figure>
                ))}
			</div>
		</section>
		<section id="contact">
			<h2>Contact</h2>
			<p>Vous avez un projet ? Discutons-en !</p>
			<form action="#" method="post">
				<label htmlFor="name">Nom</label>
				<input type="text" name="name" id="name"/>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email"/>
				<label htmlFor="message">Message</label>
				<textarea name="message" id="message" cols="30" rows="10"></textarea>
				<input type="submit" value="Envoyer"/>
			</form>
		</section>
	</main>

        </>
    );
};

export default Home;