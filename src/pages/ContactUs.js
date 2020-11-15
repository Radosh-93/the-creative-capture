import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const ContactUs = (props) => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<h1>Contact us</h1>
		</motion.div>
	);
};

export default ContactUs;
