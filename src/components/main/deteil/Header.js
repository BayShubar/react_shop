import React from 'react'
import { Link } from 'react-router-dom'

import AddButton from '../product/AddButton'
class Header extends React.Component{
	render(){
		return(
				<div className='col-md-12' style={style.headerStyle}>
					<Link to="/"><button className="btn btn-success" style={style.buyBtn}>Back</button></Link>
					<AddButton />
				</div>
			);
	}
}

export default Header;

const style = {
	headerStyle: {
		background: '#FE136B',
		height:'50px',
		borderRadius:'5px',
	},
		buyBtn:{
		background:'#FE136B',
		border: '2px solid white',
		borderRadius: '10px',
		marginRight:'10px',
		outline: 'none',
		marginTop: '5px'
	},
}