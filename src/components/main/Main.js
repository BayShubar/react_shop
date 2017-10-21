import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProductsHolder from './product/Products'
import DeteilHolder from './deteil/DeteilHolder'
 
class Main extends React.Component{

	render(){
		return(
				<div style={style.holder}>
					<Switch>
						<Route exact path="/" component={ProductsHolder} />
						<Route exact path="/product/:id" component={DeteilHolder} />
					</Switch>
				</div>
			)
	}
}

export default Main;

const style = {
	holder: {
				margin: '20px 0px 0px -30px',
	}
}