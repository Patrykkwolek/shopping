import { ProductType } from '../product/type'

export interface MealType {
	id: string
	title: string
	description: string
	recipe: string
	timeToPrepare: string
	products: ProductType[]
	previewImg: string
}
