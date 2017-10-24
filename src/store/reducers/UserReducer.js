const initialState = {
	id: 1,
	cost: 0,
	name: 'Yerkebulan',
	login: 'Yerke199',
	products: [],
}

export default function UserReducer(state = initialState, action){
	switch(action.type){
		case 'PRODUCT_ADD_CART':
			state.cost = state.cost + action.data.price;
			state.products.push(action.data);
			return {
			... state
			};
	}
	return state;
}