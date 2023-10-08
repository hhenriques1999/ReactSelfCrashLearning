import './App.css';
import React from 'react';
import FirstTest from './FirstTest';
import TestWithMockData from './TestWithMockData';

const veryRealData = [
	{
			"id": 1,
			"first_name": "Fletcher",
			"last_name": "McVanamy",
			"email": "mmcvanamy0@e-recht24.de",
			"age": 30
		}, {
			"id": 2,
			"first_name": "Clarice",
			"last_name": "Harrild",
			"email": "charrild1@dion.ne.jp",
			"age": 35
		}, 
]

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
	return (
		<>
			<FirstTest></FirstTest>
			<TestWithMockData data={veryRealData}></TestWithMockData>
		</>
	);
}

export default App;
