import * as _ from 'lodash'

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
		eng: 'Groceries, for',
		pl: 'Artykuły spożywcze,',
	},
	sliderText2nd: {
		eng: 'every occasion',
		pl: 'na każdą okazję',
	},
	signUp: {
		eng: 'SIGN UP',
		pl: 'UTWÓRZ NOWE KONTO',
	},
	login: {
		eng: 'LOGIN',
		pl: 'ZALOGUJ SIĘ',
	},
	singupHeader: {
		eng: 'Start your',
		pl: 'Rozpocznij swoje',
	},
	singupHeader2nd: {
		eng: 'healthy life now',
		pl: 'nowe życie',
	},
})

const getTranslation = (translation: string): string => {
	const lang = 'eng'
	return _.get(translations, [translation, lang], '')
}

export default getTranslation
