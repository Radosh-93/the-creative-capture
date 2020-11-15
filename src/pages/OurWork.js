import React from 'react';
import styled from 'styled-components'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import {Link} from "react-router-dom";

const OurWork = (props) => {
	return (
		<Work>
			<Movie>
				<h2>The Athlete</h2>
				<div className="line"/>
				<Link>
					<img src={athlete} alt="athlete"/>
				</Link>
			</Movie>
			<Movie>
				<h2>The Racer</h2>
				<div className="line"/>
				<Link>
					<img src={theracer} alt="the racer"/>
				</Link>
			</Movie>
			<Movie>
				<h2>Good Times</h2>
				<div className="line"/>
				<Link>
					<img src={goodtimes} alt="good times"/>
				</Link>
			</Movie>
		</Work>
	);
};
const Work = styled.div`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	
`;
const Movie = styled.div`
	padding-bottom: 10rem;
	h2 {
	padding: 1rem 0;
	}
	.line {
		height: 0.5rem;
		background-color: #cccccc;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
	
`
export default OurWork;