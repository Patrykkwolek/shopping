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
	singupHeaderDescription: {
		eng: 'Here are an app to help you to change your diet, exercise and lifestyle for the better — for good!',
		pl: 'Here are five steps to change your diet, exercise and lifestyle for the better — for good!',
	},
})

const getTranslation = (translation: string): string => {
	const lang = 'eng'
	return _.get(translations, [translation, lang], '')
}

export default getTranslation
