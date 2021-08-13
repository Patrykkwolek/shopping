export interface ProductType {
	id: string
	title: string
	description: string
	dueDate: string
	price: number
	grammageDescription: string
	weight: number
	substitutes?: ProductType[]
}
