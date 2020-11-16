import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function FaqQuestion({ question, answer }) {
	const [toggle, setToggle] = useState(false);
	return (
		<Question layout onClick={() => setToggle(!toggle)}>
			<motion.h4 layout>{question}</motion.h4>
			{toggle ? (
				<div className="answer">
					<p>{answer[0]}</p>
					<p>{answer[1]}</p>
				</div>
			) : null}
			<motion.div layout className="faq-line" />
		</Question>
	);
}
const Question = styled(motion.div)`
	padding-top: 2rem;
	cursor: pointer;
	.answer {
		padding: 2rem 0;
		p {
			padding: 1rem 0;
		}
	}
	.faq-line {
		background-color: #cccccc;
		height: 0.2rem;
		margin-top: 2rem;
		width: 100%;
	}
`;
export default FaqQuestion;
