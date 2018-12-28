import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Detail from './components/Detail.js';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
	<Router>
		<div>
        	<Route exact path="/" render={() => <App />} />
        	<Route exact path="/detail" render={(props) => <Detail {...props} />} />
       	</div>
     </Router>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
