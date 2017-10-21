import React from 'react'
import {Link} from 'react-router-dom'

import AddButton from './AddButton'
 
class Product extends React.Component{

	render(){
		const product = this.props.product;
		return(
				<div className='col-md-3' style={style.productHolder}>
						<div className="col-md-12" style={style.imgPart}>
								<img style={style.imgProduct} src={product.img}/>
						</div>
						<div className="col-md-12" style={style.infoPart}>
								<h4>{ product.name }</h4> <h5><b>${ product.price.toString() }</b></h5>
						</div>
						<div className="col-md-12" style={style.actionPart}>
							<AddButton/>
							<Link to={'/product/'+product.id}><button className="btn btn-success" style={style.infoBtn}>More Info</button></Link>
						</div>
				</div>
			)
	}
}

export default Product;

const style = {
	productHolder:{
		border: '1px solid #FE136B',
		padding: '10px',
		height: '450px',
		margin: '0px 50px 50px 0px',
		borderRadius: '10px',
	},
	imgPart:{
		height: '300px',
		borderBottom: '1px solid #FE136B',
	},
	imgProduct:{
		height: '280px',
		marginLeft: '25px',
	},
	infoPart:{
		color: '#FE136B',
	},
	infoBtn:{
		background:'white',
		border: '1px solid #FE136B',
		color: '#FE136B',
		outline: 'none',
	}
}