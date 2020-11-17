import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	@media screen and (max-width: 1020px) {
		flex-direction: column;
		text-align: center;
		padding: 2rem;
	}
`;
export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	z-index: 2;
	@media screen and (max-width: 1020px) {
		padding: 0;
		width: 100%;
	}
	h2 {
		font-weight: lighter;
	}
`;
export const Image = styled.div`
	flex: 1;
	overflow: hidden;
	z-index: 2;
	@media screen and (max-width: 1020px) {
		width: 100%;
		padding-top: 3rem;
	}
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
		@media screen and (max-width: 1020px) {
			height: 60vh;
		}
	}
`;
export const Hide = styled.div`
	overflow: hidden;
`;
