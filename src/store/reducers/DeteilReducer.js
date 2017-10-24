const initialState = {
		id: 0,
		price: 0,
		name: '',
		brand: '',
		type: '',
		img: '',
		character: '',
	}


export default function DeteilReducer(state = initialState, action){
	switch(action.type){
		case 'DETEIL_ADD':
			return action.product;
	}
	return state;
}