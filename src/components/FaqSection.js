import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../styles";
import { FaqQuestions } from "../movieState";
import FaqQuestion from "./FaqQuestion";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../hooks/useScroll";
import { scrollReveal } from "../animation";

const FaqSection = (props) => {
	const [element, controls] = useScroll();
	const [questions] = useState(FaqQuestions);
	return (
		<div className={"faq"}>
			<Faq
				variants={scrollReveal}
				animate={controls}
				initial="hidden"
				ref={element}
			>
				<h2>
					Any Question <span>FAQ</span>
				</h2>
				<AnimateSharedLayout>
					{questions.map((item) => (
						<FaqQuestion
							question={item.question}
							answer={item.answer}
							key={item.question}
						/>
					))}
				</AnimateSharedLayout>
			</Faq>
		</div>
	);
};
const Faq = styled(Wrapper)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
`;
export default FaqSection;
