import React from "react";
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
const ContactUs = (props) => {
	return (
		<ContactStyle
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Send Us A Message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Send an email.</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Social Media</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};
const ContactStyle = styled(motion.div)`
	background-color: #fff;
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	@media screen and (max-width: 640px) {
		padding: 3rem;
		text-align: center;
	}
`;
const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
`;

const Hide = styled.div`
	overflow: hidden;
`;
const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background-color: #353535;
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
		@media screen and (max-width: 640px) {
			font-size: 2rem;
		}
	}
`;
export default ContactUs;
