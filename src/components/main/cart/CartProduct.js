import React from 'react'
import DeleteFromCart from '../buttons/DeleteFromCart'

class CartProduct extends React.Component{
	render(){
				const product = this.props.product;
		return(
				<div style={style.deteilHolder}>
					<p  style={style.cartText}>{ product.name }</p> <p style={style.cartText}>$850</p>
					<DeleteFromCart />
				</div>
			);
	}
}

export default CartProduct;

const style = {
	deteilHolder:{
		border: '1px solid #FE136B',
		width: "100%",
		borderRadius:'10px',
		height: '60px',
		padding: '15px',
		marginTop: '10px'
	},
	cartText: {
		fontSize: '20px',
		display: 'inline-block',
		color: '#FE136B',
		marginRight: '50px',
	}
}