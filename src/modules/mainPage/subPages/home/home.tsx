import React from 'react'
import './home.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import breakfast from '../../../../resources/img/tmp/breakfast.png'
import dinner from '../../../../resources/img/tmp/dinner.png'
import lunch from '../../../../resources/img/tmp/lunch.png'

function Home() {
	return (
		<div className='home'>
			<div className='categories'>
				<h5>Categories</h5>
				<Swiper spaceBetween={50}>
					<SwiperSlide>
						<div className='categories__content'>
							<img src={breakfast} alt='' height={150} width='100%' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='categories__content'>
							<img src={lunch} alt='' height={150} width='100%' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='categories__content'>
							<img src={dinner} alt='' height={150} width='100%' />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Home
