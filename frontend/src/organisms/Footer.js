import React from 'react';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/index.css';

function FooterBase() {
	return (
		<footer className="mt-5">
			<div className="footer-copyright text-center py-3">© 2019 Copyright:
				Sportify
			</div>
		</footer>
	);
}

export const Footer = withRouter(FooterBase);