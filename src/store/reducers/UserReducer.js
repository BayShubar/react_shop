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
			state.products.push(action.data);
			state.cost = state.products.reduce((sum, product)=>sum+product.price, 0);
			return {
			... state
			};
		case 'PRODUCT_DELETE_CART':
			state.products = state.products.filter((product)=>{return(!(product.id === action.data))});
			state.cost = state.products.reduce((sum, product)=>sum+product.price, 0);
			return {
				...state
			};
	}
	return state;
}