import React from 'react'
import { connect } from 'react-redux'

class UserInfo extends React.Component{
	render(){
		return(
				<div className="col-md-12">	
					<div style={style.moneyInfo}>
						 <span style={style.moneyText} className="glyphicon glyphicon-user"></span> <p style={style.moneyText}>cost: $ {this.props.cost}.00</p>
					</div>
				</div>
			);
	}
}

export default connect(
		state=>({
			cost: state.UserReducer.cost
		})
	)(UserInfo);


const style = {
	userHolder:{
		border: '1px solid #FE136B'
	},
	moneyText:{
		color: 'white',
		fontSize: '25px',
		display:'inline-block',
	},
	moneyInfo:{
		padding: '10px 10px 0px 10px',
		textAlign:'center',
	}
}