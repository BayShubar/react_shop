import React from 'react'

class UserInfo extends React.Component{
	render(){
		return(
				<div className="col-md-12">	
					<h3 style={style.info}>Brands</h3>
					<div style={style.typeChooserActive}>All</div>
					<div style={style.typeChooser}>Iphone</div>
					<div style={style.typeChooser}>Samsung</div>
					<div style={style.typeChooser}>HTC</div>
					<div style={style.typeChooser}>Meizu</div>
					<div style={style.typeChooser}>Xiomi</div>
					<div style={style.typeChooser}>LG</div>
					<div style={style.typeChooser}>Hwawei</div>
					<div style={style.typeChooser}>Sony</div>
				</div>
			);
	}
}

export default UserInfo;


const style = {
	info:{
		color: '#FE136B',
	},
	typeChooser:{
		border: '1px solid #FE136B',
		padding: ' 7px 10px',
		color: '#FE136B',
		borderRadius: '5px',
		marginTop: '5px',
	},
	typeChooserActive:{
		border: '1px solid #FE136B',
		padding: ' 7px 10px',
		color: 'white',
		borderRadius: '5px',
		marginTop: '5px',
		background: '#FE136B',
	}
}