import React from 'react'
import { connect } from 'react-redux'

import Product from './Product'
 
class Products extends React.Component{

	render(){
		const products = [];
		this.props.products.map((product, index)=>{
			products.push(<Product key = {index.toString()} product = { product }/>);
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
			products: state.ProductReducer
		}),
		dispatch=>({})
	)(Products);

const style = {
	mainHolder:{
		height: '620px',
		overflowY: 'scroll',
	}
}