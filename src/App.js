import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import {Route, Switch, useLocation} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import {AnimatePresence} from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyles/>
			<Nav/>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact component={AboutUs}/>
					<Route path='/work' exact component={OurWork}/>
					<Route path='/work/:id' component={MovieDetail}/>
					<Route path='/contact' component={ContactUs}/>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
