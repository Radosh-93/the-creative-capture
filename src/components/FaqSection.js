import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../styles";
import { FaqQuestions } from "../movieState";
import FaqQuestion from "./FaqQuestion";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = (props) => {
	const [questions, setQuestions] = useState(FaqQuestions);
	return (
		<div className={"faq"}>
			<Faq>
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
