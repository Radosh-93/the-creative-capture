import { createGlobalStyle } from "styled-components";

const greenColor = "#23d997";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
//Remove Gray Highlight When Tapping Links in Mobile
*:active {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
    @media screen and (max-width: 1700px){
        font-size: 75%;
    }
    @media screen and (max-width: 1270px){
        font-size: 60%;
    }
}
body {
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
}
#root {
    overflow-x: hidden;
    position: relative;
    width: 100%;
}
button {
	font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid ${greenColor};
    background-color: transparent;
    color: white;
    transition: all .3s ease;
    &:hover {
        background-color: ${greenColor};
    }
}
h2 {
	font-weight: lighter;
	font-size: 4rem;
}
h3 {
	color: #ffffff;
}
h4 {
	font-weight: bold;
	font-size: 2rem;
}
a {
	font-size: 1.1rem;
}
span {
	font-weight: bold;
	color: ${greenColor};
}
p {
	padding: 3rem 0;
	color:#ccc;
	font-size: 1.4rem;
	line-height: 1.5;
}
`;
export default GlobalStyles;
