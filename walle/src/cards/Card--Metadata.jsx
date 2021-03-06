//------------------------------ import libraries
import React, { Fragment } from 'react';

//------------------------------ import components
import { FaClock, FaUsers, FaFire } from 'react-icons/fa';

//------------------------------ import styles and images
import '../assets/components-style/Recipe.scss';

const Metadata = ({ time, portions, difficult }) => {
	return (
		<Fragment>
			<div className="Metadata">
				<div className="Metadata__item">
					<FaClock className="icon--active" />
					<p>
						Tiempo <br /> {time} Min
					</p>
				</div>
				<div className="Metadata__item">
					<FaUsers className="icon--active" />
					<p>
						Porciones <br /> {portions} personas
					</p>
				</div>
				<div className="Metadata__item">
					<FaFire className="icon--active" />
					<p>
						Dificultad <br /> {difficult}
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Metadata;
