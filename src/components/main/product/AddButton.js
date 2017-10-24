import React from 'react'
import { connect } from 'react-redux'

class AddButton extends React.Component{
	render(){
		return(
				<button onClick={ () =>this.props.add( this.props.product ) } 
								className="btn btn-success" style={style.buyBtn}>Buy Now</button>
			);
	}
}

export default connect(
		dispatch=>({
			add: (product)=>{
				console.log(product)
			}
		})
	)(AddButton);

const style = {
	buyBtn:{
		background:'#FE136B',
		border: '2px solid white',
		borderRadius: '10px',
		marginRight:'10px',
		outline: 'none',
		marginTop: '5px'
	},
}