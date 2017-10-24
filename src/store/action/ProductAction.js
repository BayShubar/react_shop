import {initialState as products} from '../database/products'

export const toInitialLoad = (id)=>dispatch=>{
		setTimeout(()=>{
				const data = products.filter((product)=>{
					if(product.id == id)
						return product
				})[0];
				dispatch({type: "DETEIL_ADD", product: data})
		},100)
}


export const toAddCart=(product)=>dispatch=>{
	setTimeout(()=>{
		 dispatch({type: 'PRODUCT_ADD_CART', data: product});
	}, 100);
}
