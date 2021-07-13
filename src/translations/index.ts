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
})

const getTranslation = (translation: string): string => {
	const lang = 'eng'
	return translations[translation][lang]
}

export default getTranslation
