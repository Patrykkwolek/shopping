interface Translation {
	[key: string]: string
}

interface TranslationRecords {
	[key: string]: Translation
}

const translations: TranslationRecords = Object.freeze({
	logoText: {
		eng: 'Healhty Food Delivery',
		pl: 'Dostawy Zdrowego Jedzenia',
	},
	sliderText: {
		eng: 'Food products, For',
		pl: '',
	},
	sliderText2nd: {
		eng: 'every occasion',
		pl: '',
	},
})

const getTranslation = (translation: string): string => {
	const lang = 'eng'
	return translations[translation][lang]
}

export default getTranslation
