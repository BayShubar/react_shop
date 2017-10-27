const initialState = {
	searchWord:'',
	brands:[
		{ name: 'all', status: true },
		{ name: 'iphone', status: false },
		{ name: 'samsung', status: false },
		{ name: 'htc', status: false },
		{ name: 'huawei', status: false },
		{ name: 'meizu', status: false },
		{ name: 'sony', status: false },
		{ name: 'xiaomi', status: false },
		{ name: 'lg', status: false },
	],
}

export default function SearchReducer(state = initialState, action){
	switch(action.type){
		case 'ADD_SEARCH_WORD':
			state.searchWord = action.data;
			return {
				...state
			}
		case 'SET_BRAND':
			state.brands = state.brands.map((brand)=>{
				brand.status = false;
				if (brand.name === action.data)
					brand.status = true;
					return brand;
			});
		return {
				...state
		}
	}
	return state;
}