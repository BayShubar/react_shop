import React from 'react'
import { connect } from 'react-redux'

class Search extends React.Component{
	constructor(props) {
		super(props);
		
		this.searchWordChanged = this.searchWordChanged.bind(this);
	}

	searchWordChanged(){
		this.props.onsearchWordChanged(this.searchWord.value);
	}

	render(){
		return(
				<div className="col-md-12">	
					<div style={style.searcHolder}>
						<div>
							<input onChange={this.searchWordChanged} ref = {(input)=>{this.searchWord = input}}
							  style={ style.searchInp } type="text" /> 
							<button style={style.searchBtn}><span className="glyphicon glyphicon-search"></span></button>
						</div>
					</div>
				</div>
			);
	}
}

export default connect(
			state=>({}),
			dispatch=>({
				onsearchWordChanged: (word)=>{
					dispatch({type:'ADD_SEARCH_WORD', data: word});
				}
			})
		)(Search);


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