import React from 'react'

import Header from './Header'
class DeteilHolder extends React.Component{
	render(){
		return(
				<div  style={style.deteilHolder}>
					<Header/>
				</div>
			);
	}
}

export default DeteilHolder;

const style = {
	deteilHolder:{
		border: '1px solid #FE136B',
		width: "100%",
		borderRadius:'10px',
		height: '600px',
	}
}