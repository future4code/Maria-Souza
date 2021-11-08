import Context from './Context'
import { useState } from 'react'
import { FRONT, BACK, URL } from '../constants/Url'
import axios from 'axios'

const GlobalState = (props) => {
	const [cards, setCards] = useState([])
	const cardFront = FRONT
	const cardBack = BACK

	const getAllCards = () => {
		axios
		.get(URL)
		.then((res => {
			setCards(res.data.cards)
		}))
		.catch((err => {
			window.alert("Ocorreu um erro! Tente novamente.")
		}))
	}

	const states = { cardFront, cardBack, cards }
	const setters = {}
	const requests = { getAllCards }

 	return <Context.Provider value={{ states, setters, requests }}>
		{ props.children }
	</Context.Provider>
}

export default GlobalState