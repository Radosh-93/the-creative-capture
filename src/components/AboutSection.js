import React from "react";
import home1 from "../img/home1.png";
import { Wrapper, Description, Hide, Image } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = (props) => {
	return (
		<div className={"about"}>
			<Wrapper>
				<Description>
					<motion.div>
						<Hide>
							<motion.h2>We work to make</motion.h2>
						</Hide>
						<Hide>
							<motion.h2>
								your <span>dreams</span>
							</motion.h2>
						</Hide>
						<Hide>
							<motion.h2>come true.</motion.h2>
						</Hide>
					</motion.div>
					<p>
						Contact us for any photography or videography ideas that you have.
						We have professionals with amazing skills.{" "}
					</p>
					<button>Contact Us</button>
				</Description>
				<Image>
					<img src={home1} alt="guy with a camera" />
				</Image>
			</Wrapper>
		</div>
	);
};
//Styled Components

export default AboutSection;
