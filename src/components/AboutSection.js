import React from "react";
import home1 from "../img/home1.png";
import { Wrapper, Description, Hide, Image } from "../styles";
import Wave from "./Wave";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = (props) => {
	return (
		<div className={"about"}>
			<Wrapper>
				<Description>
					<motion.div>
						<Hide>
							<motion.h2 variants={titleAnimation}>We work to make</motion.h2>
						</Hide>
						<Hide>
							<motion.h2 variants={titleAnimation}>
								your <span>dreams</span>
							</motion.h2>
						</Hide>
						<Hide>
							<motion.h2 variants={titleAnimation}>come true.</motion.h2>
						</Hide>
					</motion.div>
					<motion.p variants={fade}>
						Contact us for any photography or videography ideas that you have.
						We have professionals with amazing skills.{" "}
					</motion.p>
					<motion.button variants={fade}>Contact Us</motion.button>
				</Description>
				<Image>
					<motion.img
						variants={photoAnimation}
						src={home1}
						alt="guy with a camera"
					/>
				</Image>
				<Wave />
			</Wrapper>
		</div>
	);
};
//Styled Components

export default AboutSection;
