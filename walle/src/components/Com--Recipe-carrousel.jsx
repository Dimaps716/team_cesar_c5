//------------------------------ import libraries
import React from 'react';

//------------------------------ import styles and images
import '../assets/components-style/Recipecard.scss';

//------------------------------------ COMPONENT ------------------------------------//
const RecipeCarrousel = ({ title, children }) => {
	return (
		<section className="Recipe-carrousel">
			<h2 className="Recipe-carrousel__title">{title}</h2>
			<div className="Recipe-carrousel__cards-container">{children}</div>
		</section>
	);
};

export default RecipeCarrousel;
