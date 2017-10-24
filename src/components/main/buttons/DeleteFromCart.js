import React from 'react'
import { connect } from 'react-redux'


class CartProduct extends React.Component{
	render(){
		return(
				<button style={style.btnDelete} >Delete</button>
			);
	}
}

export default connect(
		state=>({

		}),
		dispatch=>({
			
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