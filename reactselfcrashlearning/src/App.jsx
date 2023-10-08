import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Counter from './Counter';
import counterReducer from './reducers';

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
}

export default App;
