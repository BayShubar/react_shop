import React from 'react'

import UserInfo from './UserInfo'
import Search from './Search'
import Brands from './Brands'

class SideBar extends React.Component{
	render(){
		return(
				<div className='col-md-10 col-md-offset-1' style={style.Holder}>	
					<div style={style.topBar}>
						<UserInfo/>
						<Search/>
					</div>
					<div style={style.midleBar}>
						<Brands/>
					</div>
				</div>
			);
	}
}

export default SideBar;

const style = {
	Holder:{
		padding: '15px 15px 0px 0px',
	},
	topBar:{
		borderRadius: '10px',	
		height: '100px',
		width:'100%',
		background: '#FE136B',
	},
	midleBar:{
		borderRadius: '10px',	
		height: '400px',
		width:'100%',
		background: '<white></white>',
		marginTop: '10px',
		border: '1px solid #FE136B',
		padding: '10px',
	}

}