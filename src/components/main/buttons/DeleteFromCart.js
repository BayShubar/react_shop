import React from 'react'
import { connect } from 'react-redux'
import { toDeleteCart } from '../../../store/action/ProductAction'


class CartProduct extends React.Component{
	render(){
		return(
				<button style={style.btnDelete} onClick={()=>{this.props.deleteProduct(this.props.id)}} >Delete</button>
			);
	}
}

export default connect(
		state=>({

		}),
		dispatch=>({
			deleteProduct: (id)=>{
				dispatch(toDeleteCart(id))
			}
		})
	)(CartProduct);

const style = {
	btnDelete:{
		float: 'right',
		backgroundColor: '#FE136B',
		border: '0px solid #FE136B',
		borderRadius: '20px',
		padding: '5px 20px',
		color: 'white',
		outline: 'none',
	},
}