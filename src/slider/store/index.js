import { combineReducers, createStore, applyMiddleware } from 'redux';
import { photoGalleryReducer } from './reducer';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
	gallery: photoGalleryReducer
})

const logger = createLogger({
	duration: true,
	collapsed: true,
	colors: {
		title: () => '#139bfe',
		nextState: () => '#3f4' 
	}
})

const preloadedState = JSON.parse(localStorage.getItem('gallery'))
const store = preloadedState
	? createStore(rootReducer, preloadedState, applyMiddleware(logger))
	: createStore(rootReducer, applyMiddleware(logger))

store.subscribe(() => {
	const state = store.getState()
	localStorage.setItem('gallery', JSON.stringify(state))
})

export default store

