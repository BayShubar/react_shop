import React from 'react'
import {connect} from 'react-redux'
import { toInitialLoad } from '../../../store/action/ProductAction'

import Header from './Header'
class DeteilHolder extends React.Component{

	componentDidMount(){
			this.props.onInitialLoad(this.props.match.params.id);
	}
	render(){
		const product = this.props.product;
		return(
				<div  style={style.deteilHolder}>
					<Header/>
					<div>
						<div className="col-md-3" style={style.imgPart}>
							<img className="col-md-12" style={style.productImg} src={ product.img } />
						</div>
						<div className="col-md-8" style={style.productInfo}>
								<h1>{ product.name }</h1>
								<h3><b>${ product.price.toString() }</b></h3>
								<p>
									{ product.character }
								</p>
						</div>
					</div>
				</div>
			);
	}
}

export default connect(
		state=>({
			product: state.DeteilReducer
		}),
		dispatch=>({
			onInitialLoad: (id)=>{
				dispatch(toInitialLoad(id));
			}
		})
	)(DeteilHolder);



const style = {
	deteilHolder:{
		border: '1px solid #FE136B',
		width: "100%",
		borderRadius:'10px',
		height: '600px',
	},
	imgPart:{
		height: '350px',
		width: '300px',
		overflow: 'hidden',
		background: 'red',
		marginTop: '20px',
	},
	productImg:{
		height: '350px',
		width: '500px',
		marginLeft: '-100px',
	},
	productInfo:{
		margin: '20px 20px',
		fontSize:'22px',
	}
}