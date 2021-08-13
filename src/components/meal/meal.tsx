import React from 'react'
import './meal.scss'

import img1 from '../../resources/img/tmp/1.png'
import img2 from '../../resources/img/tmp/2.png'
import img3 from '../../resources/img/tmp/3.png'
import img4 from '../../resources/img/tmp/4.png'
import img5 from '../../resources/img/tmp/5.png'
import img6 from '../../resources/img/tmp/6.png'
import img7 from '../../resources/img/tmp/7.png'
import img8 from '../../resources/img/tmp/8.png'
import img9 from '../../resources/img/tmp/9.png'
import img10 from '../../resources/img/tmp/10.png'

type Props = {
	imgName: string
}

function Meal(props: Props) {
	const { imgName } = props

	let Image
	let name
	let timeToPrepare
	let price

	switch (imgName) {
		case 'img1':
			Image = img1
			name = 'Sałatka pomidorowa z cukinią i fetą'
			timeToPrepare = '10-20 min'
			price = '25,99 zł'
			break
		case 'img2':
			Image = img2
			name = 'Jajko sadzonę na pomidorach'
			timeToPrepare = '15-20 min'
			price = '14,99 zł'
			break
		case 'img3':
			Image = img3
			name = 'Zupa minestrone'
			timeToPrepare = '30-40 min'
			price = '29,99 zł'
			break
		case 'img4':
			Image = img4
			name = 'Zapiekanki z cukini'
			timeToPrepare = '25-30 min'
			price = '14,99 zł'
			break
		case 'img5':
			Image = img5
			name = 'Suflaki'
			timeToPrepare = '25-35 min'
			price = '49,99 zł'
			break
		case 'img6':
			Image = img6
			name = 'Makaron z krewetkami'
			timeToPrepare = '20-25 min'
			price = '49,99 zł'
			break
		case 'img7':
			Image = img7
			name = 'Schabowe z kapustą'
			timeToPrepare = '30-40 min'
			price = '29,99 zł'
			break
		case 'img8':
			Image = img8
			name = 'Sałatka warzywna z kaszą bulgur, fetą i jarmużem'
			timeToPrepare = '15-20 min'
			price = '19,99 zł'
			break
		case 'img9':
			Image = img9
			name = 'Łosoś ze szparagami'
			timeToPrepare = '30-50 min'
			price = '59,99 zł'
			break
		case 'img10':
			Image = img10
			name = 'Sałatka z makaronem i cukinią'
			timeToPrepare = '20-30 min'
			price = '29,99 zł'
			break
		default:
			break
	}

	return (
		<div className='meal'>
			<img src={Image} alt='' className='' width='100%' />
			<div className='meal__name'>{name}</div>
			<div className='meal__items'>
				<span className='meal__time-item'>{timeToPrepare}</span>
				<span className='meal__price-item'>{price}</span>
			</div>
		</div>
	)
}

export default Meal
