import React from 'react'
import { connect } from 'react-redux'

import Product from './Product'
 
class Products extends React.Component{

	render(){
		console.log(this.props.brand)
		const products = this.props.products.map((product, index)=>{
				if(product.name.toUpperCase().indexOf(this.props.searchWord.toUpperCase()) != -1){
					if(product.brand === this.props.brand || this.props.brand === 'all' ){
						return <Product key = {index.toString()} product = { product }/>;
					}
				}
			});

		return(
				<div style={style.mainHolder}>
					{products}
				</div>
			)
	}
}

export default connect(
		state=>({
			products: state.ProductReducer,
			searchWord: state.SearchReducer.searchWord,
			brand: state.SearchReducer.brands.filter((brand)=>brand.status)[0].name,
		}),
		dispatch=>({})
	)(Products);

const style = {
	mainHolder:{
		height: '620px',
		overflowY: 'scroll',
	}
}