//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";
import { useScroll } from "./hooks/useScroll";

export const MovieState = () => {
	return [
		{
			title: "The Athlete",
			mainImg: athlete,
			secondaryImg: athlete2,
			url: "/work/the-athlete",
			scrollAnim: [],
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "Good Times",
			mainImg: goodtimes,
			url: "/work/good-times",
			secondaryImg: goodtimes2,
			scrollAnim: useScroll(),
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "The Racer",
			mainImg: theracer,
			url: "/work/the-racer",
			secondaryImg: theracer2,
			scrollAnim: useScroll(),
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
	];
};

export const FaqQuestions = () => {
	return [
		{
			question: "How Do I Start?",
			answer: [
				"Lorem ipsum dolor sit amet",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, molestiae?",
			],
			active: false,
		},
		{
			question: "Daily Schedule",
			answer: [
				"Lorem ipsum dolor sit amet",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, molestiae?",
			],
			active: false,
		},
		{
			question: "Different Payment Methods",
			answer: [
				"Lorem ipsum dolor sit amet",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, molestiae?",
			],
			active: false,
		},
		{
			question: "What Products do you offer?",
			answer: [
				"Lorem ipsum dolor sit amet",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, molestiae?",
			],
			active: false,
		},
	];
};
