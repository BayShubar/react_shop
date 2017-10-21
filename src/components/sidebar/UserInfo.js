import React from 'react'

class UserInfo extends React.Component{
	render(){
		return(
				<div className="col-md-12">	
					<div style={style.moneyInfo}>
						 <span style={style.moneyText} className="glyphicon glyphicon-user"></span> <p style={style.moneyText}>cost: $250.00</p>
					</div>
				</div>
			);
	}
}

export default UserInfo;


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