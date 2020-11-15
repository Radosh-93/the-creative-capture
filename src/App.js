import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import {Route, Switch} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
	return (
		<div className="App">
			<GlobalStyles/>
			<Nav/>
			<Switch>
				<Route path='/' exact component={AboutUs}/>
				<Route path='/work' exact component={OurWork}/>
				<Route path='/work/:id' component={MovieDetail}/>
				<Route path='/contact' component={ContactUs}/>
			</Switch>
		</div>
	);
}

export default App;
