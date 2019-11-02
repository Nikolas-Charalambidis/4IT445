import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {MainSection, ScrollToTop} from './atoms/'
import {Flash} from './organisms/Flash';
import {ApiProvider} from './utils/api';
import {AuthProvider} from './utils/auth';
import {Routes} from './Routes';
import Event from './utils/event';
import {Footer} from "./organisms/Footer"
import {TopNavigation} from "./organisms/TopNavigation"

function AllProviders({children}) {
	return (
		<AuthProvider>
			<ApiProvider>
				<BrowserRouter>
					<Flash />
					<ScrollToTop/>
					<TopNavigation/>
					<MainSection>
						{children}
					</MainSection>
					<Footer/>
				</BrowserRouter>
			</ApiProvider>
		</AuthProvider>
	);
}

export function App() {
	window.flash = (message, type="success") => Event.emit('flash', ({message, type}));
	return (
		<AllProviders>
			<Routes/>
		</AllProviders>
	);
}
