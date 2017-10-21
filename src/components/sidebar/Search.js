import React from 'react'

class Search extends React.Component{
	render(){
		return(
				<div className="col-md-12">	
					<div style={style.searcHolder}>
						<div>
							<input style={ style.searchInp } type="text" /> 
							<button style={style.searchBtn}><span className="glyphicon glyphicon-search"></span></button>
						</div>
					</div>
				</div>
			);
	}
}

export default Search;


const style = {
	searcHolder:{
		border: '1px solid #FE136B',
		padding: '7px',
		background: 'white',
		borderRadius:'10px',
	},
	searchInp:{
		border: '0px solid white',
		outline: 'none',
		display: 'inline-block',
		width: '160px',
		color: '#FE136B',
	},
	searchBtn:{
		background: 'white',
		border: '0px solid white',
		color: '#FE136B',
		display: 'inline-block',
	}
}