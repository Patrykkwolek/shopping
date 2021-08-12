import React from 'react'

import img1 from '../../../../../../resources/img/tmp/1.png'
import img2 from '../../../../../../resources/img/tmp/2.png'
import img3 from '../../../../../../resources/img/tmp/3.png'
import img4 from '../../../../../../resources/img/tmp/4.png'
import img5 from '../../../../../../resources/img/tmp/5.png'
import img6 from '../../../../../../resources/img/tmp/6.png'
import img7 from '../../../../../../resources/img/tmp/7.png'
import img8 from '../../../../../../resources/img/tmp/8.png'
import img9 from '../../../../../../resources/img/tmp/9.png'
import img10 from '../../../../../../resources/img/tmp/10.png'

type Props = {
	imgName: string
}

function Dish(props: Props) {
	const { imgName } = props

	let Image

	switch (imgName) {
		case 'img1':
			Image = img1
			break
		case 'img2':
			Image = img2
			break
		case 'img3':
			Image = img3
			break
		case 'img4':
			Image = img4
			break
		case 'img5':
			Image = img5
			break
		case 'img6':
			Image = img6
			break
		case 'img7':
			Image = img7
			break
		case 'img8':
			Image = img8
			break
		case 'img9':
			Image = img9
			break
		case 'img10':
			Image = img10
			break
		default:
			break
	}

	return (
		<div className='dish'>
			<img src={Image} alt='' className='' width='100%' />
		</div>
	)
}

export default Dish
