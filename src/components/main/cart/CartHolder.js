import React from 'react'
import Header from '../deteil/Header'
import CartProduct from './CartProduct'
import { connect } from 'react-redux'

class CartHolder extends React.Component{

	render(){
		const products = [];
		this.props.cartProducts.map((product, index)=>{
			products.push(<CartProduct key={index.toString()} product={ product }/>);
		})
		return(
				<div style={style.deteilHolder}>
					<Header />
						<div className='col-md-8 col-md-offset-2'><br/>
							{ products }
						</div>
				</div>
			);
	}
}
export default connect(
		state=>({
			cartProducts : state.UserReducer.products
		}),
		dispatch=>({})
	)(CartHolder);

const style = {
	deteilHolder:{
		border: '1px solid #FE136B',
		width: "100%",
		borderRadius:'10px',
		height: '600px',
	}
}