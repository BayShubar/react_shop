import React from 'react'

class AddButton extends React.Component{
	render(){
		return(
				<button className="btn btn-success" style={style.buyBtn}>Buy Now</button>
			);
	}
}

export default AddButton;

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