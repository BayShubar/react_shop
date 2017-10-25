const initialState = {
	searchWord:'',
	categorie:'',
}

export default function SearchReducer(state = initialState, action){
	switch(action.type){
		case 'ADD_SEARCH_WORD':
			state.searchWord = action.data;
			return {
				...state
			}
	}
	return state;
}