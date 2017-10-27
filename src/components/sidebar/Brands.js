import React from 'react'
import { connect } from 'react-redux'

class UserInfo extends React.Component{
	render(){
			let brands = this.props.brands.map((brand, id)=>
					<div key={id.toString()} style={brand.status ? style.typeChooserActive : style.typeChooser}
					onClick={()=>{ this.props.onClickBrand(brand.name) }}>{ brand.name }</div>);
		return(
				<div className="col-md-12">	
					{brands}
				</div>
			);
	}
}

export default connect(
		state=>({
			brands:state.SearchReducer.brands 
		}),
		dispatch=>({
			onClickBrand: (name)=>{
				dispatch({type: 'SET_BRAND', data: name})
			}
		})
	)(UserInfo);


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