import * as _ from 'lodash'
import React from 'react'
import './productsList.scss'
import type { ProductType } from '../../../models/product/type'

type Props = {
	products: ProductType[]
}

function ProductsList(props: Props) {
	const { products } = props

	return (
		<div className='products-list'>
			{_.map(products, product => (
				<li>{product.title}</li>
			))}
		</div>
	)
}

export default ProductsList
