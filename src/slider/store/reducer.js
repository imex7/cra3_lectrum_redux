import photo1 from '../../assets/slider/img/s1200.jpg';
import photo2 from '../../assets/slider/img/s1201.jpg';
import photo3 from '../../assets/slider/img/s1202.jpg';
import photo4 from '../../assets/slider/img/s1203.jpg';
import photo5 from '../../assets/slider/img/s1204.jpg';
import photo6 from '../../assets/slider/img/s1205.jpg';
import photo7 from '../../assets/slider/img/s1206.jpg';

import { SHOW_NEXT_PHOTO, SHOW_PREV_PHOTO, SHOW_SELECTED_PHOTO } from './actionsTypes';

const initialState = {
	photos: [
		{id: 1, url: photo1},
		{id: 2, url: photo2},
		{id: 3, url: photo3},
		{id: 4, url: photo4},
		{id: 5, url: photo5},
		{id: 6, url: photo6},
		{id: 7, url: photo7}
	],
	selectedPhotoId: 2
}

export const photoGalleryReducer = (state = initialState, action) => {
	switch(action.type) {
		case SHOW_NEXT_PHOTO:
			if (state.selectedPhotoId === state.photos.length) {
				return state
			} else {
				return {
					...state,
					selectedPhotoId: state.selectedPhotoId + 1
				}
			}
		case SHOW_PREV_PHOTO:
			if (state.selectedPhotoId === 1) {
				return state
			} else {
				return {
					...state,
					selectedPhotoId: state.selectedPhotoId - 1
				}
			}
		case SHOW_SELECTED_PHOTO:
			return {
				...state,
				selectedPhotoId: action.payload
			}
		default:
			return state
	}
}