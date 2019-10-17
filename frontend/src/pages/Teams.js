import React from 'react';

import {Heading, MainSection} from '../atoms/';
import {TopNavigation} from '../organisms/TopNavigation';

export function Teams() {
	return (
		<>
			<TopNavigation/>
			<MainSection>
				<Heading>Teams</Heading>
				<p>This page is empty for now...</p>
			</MainSection>
		</>
	);
}