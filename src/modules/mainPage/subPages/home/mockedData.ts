import img1 from '../../../../resources/img/tmp/1.png'
import img2 from '../../../../resources/img/tmp/2.png'
import img3 from '../../../../resources/img/tmp/3.png'
import img4 from '../../../../resources/img/tmp/4.png'
import img5 from '../../../../resources/img/tmp/5.png'
import img6 from '../../../../resources/img/tmp/6.png'
import img7 from '../../../../resources/img/tmp/7.png'
import img8 from '../../../../resources/img/tmp/8.png'
import img9 from '../../../../resources/img/tmp/9.png'
import img10 from '../../../../resources/img/tmp/10.png'

import type { MealType } from '../../../../models/meal/type'
import type { ProductType } from '../../../../models/product/type'

export const productsMockedData: ProductType[] = [
	{
		id: 'product__1',
		title: 'Olej kujawski 1l',
		weight: 1000,
		grammageDescription: '1l',
		price: 6.99,
		dueDate: '1 rok',
		substitutes: [],
		description: 'Olej słonecznikowy',
	},
]

export const mealsMockedData: MealType[] = [
	{
		id: 'meal__1',
		title: 'Sałatka pomidorowa z cukinią i fetą',
		description: '',
		previewImg: img1,
		products: [],
		recipe: '',
		timeToPrepare: '10-20 min',
	},
	{
		id: 'meal__2',
		title: 'Jajko sadzonę na pomidorach',
		description: '',
		previewImg: img2,
		products: [],
		recipe: '',
		timeToPrepare: '15-20 min',
	},
	{
		id: 'meal__3',
		title: 'Zupa minestrone',
		description: '',
		previewImg: img3,
		products: [],
		recipe: '',
		timeToPrepare: '30-40 min',
	},
	{
		id: 'meal__4',
		title: 'Zapiekanki z cukini',
		description: '',
		previewImg: img4,
		products: [],
		recipe: '',
		timeToPrepare: '25-30 min',
	},
	{
		id: 'meal__5',
		title: 'Suflaki',
		description: '',
		previewImg: img5,
		products: [],
		recipe: '',
		timeToPrepare: '25-35 min',
	},
	{
		id: 'meal__6',
		title: 'Makaron z krewetkami',
		description: '',
		previewImg: img6,
		products: [],
		recipe: '',
		timeToPrepare: '20-25 min',
	},
	{
		id: 'meal__7',
		title: 'Schabowe z kapustą',
		description: '',
		previewImg: img7,
		products: [],
		recipe: '',
		timeToPrepare: '30-40 min',
	},
	{
		id: 'meal__8',
		title: 'Sałatka warzywna z kaszą bulgur, fetą i jarmużem',
		description: '',
		previewImg: img8,
		products: [],
		recipe: '',
		timeToPrepare: '15-20 min',
	},
	{
		id: 'meal__9',
		title: 'Łosoś ze szparagami',
		description: '',
		previewImg: img9,
		products: [],
		recipe: '',
		timeToPrepare: '30-50 min',
	},
	{
		id: 'meal__10',
		title: 'Sałatka z makaronem i cukinią',
		description: '',
		previewImg: img10,
		products: [],
		recipe: '',
		timeToPrepare: '20-30 min',
	},
]
