import { SHOW_NEXT_PHOTO, SHOW_PREV_PHOTO, SHOW_SELECTED_PHOTO} from './actionsTypes';

export const showNextPhoto = () => {
	return {
		type: SHOW_NEXT_PHOTO
	}
}

export const showPrevPhoto = () => {
	return {
		type: SHOW_PREV_PHOTO
	}
}

export const showSelectedPhoto = (id) => {
	return {
		type: SHOW_SELECTED_PHOTO,
		payload: id
	}
}