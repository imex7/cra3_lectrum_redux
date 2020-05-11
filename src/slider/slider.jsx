import React from 'react'
import './slider.css'
import store from './store';
import { showNextPhoto, showPrevPhoto, showSelectedPhoto } from './store/actions';
import classnames from 'classnames';

export default class Slider extends React.Component {

	showNextPhotoHandler = () => {
		store.dispatch(showNextPhoto())
		this.forceUpdate()
	}

	showPrevPhotoHandler = () => {
		store.dispatch(showPrevPhoto())
		this.forceUpdate()
	}

	showSelectedPhotoHandler = (id) => {
		store.dispatch(showSelectedPhoto(id))
		this.forceUpdate()
	}

	buttonMaker = (photos, selectedPhotoId) => {
		return photos.map((el) => {
			return (
				<button
					onClick={() => { this.showSelectedPhotoHandler(el.id) }}
					className={classnames({ "item_button_selected": selectedPhotoId === el.id })}>{el.id}
				</button>
			)
		})
	}

	render() {
		const { photos, selectedPhotoId } = store.getState().gallery
		const photo = photos.filter((el) => {
			return el.id === selectedPhotoId
		})
		
		return (
			<div className="slider_wrapper">
				<div className="slider">
					<img src={photo[0].url} alt="да нифига ((("/>
					<div className="controllers">
						{this.buttonMaker(photos, selectedPhotoId)}
					</div>
					<div className="controllers">
						<button onClick={this.showPrevPhotoHandler}>&lt;Туда</button>
						<button onClick={this.showNextPhotoHandler}>Сюда&gt;</button>
					</div>
				</div>
			</div>
		)
	}

}