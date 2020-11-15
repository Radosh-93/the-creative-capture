import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import {Route, Switch} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyles/>
			<Nav/>
			<Switch>
				<Route path='/' exact component={AboutUs}/>
				<Route path='/work' component={OurWork}/>
				<Route path='/contact' component={ContactUs}/>
			</Switch>
		</div>
	);
}

export default App;
