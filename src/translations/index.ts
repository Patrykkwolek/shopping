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
	signupHeader: {
		eng: 'Start your',
		pl: 'Rozpocznij swoje',
	},
	signupHeader2nd: {
		eng: 'healthy life now',
		pl: 'nowe życie',
	},
	signupHeaderDescription: {
		eng: 'Here are an app to help you to change your diet, exercise and lifestyle for the better — for good!',
		pl: 'Here are five steps to change your diet, exercise and lifestyle for the better — for good!',
	},
	home: {
		eng: 'Home',
		pl: 'Menu',
	},
	mainMenu: {
		eng: 'Main Menu',
		pl: 'LeftMenu Główne',
	},
	myOrder: {
		eng: 'My Order',
		pl: 'Moje Zamówienia',
	},
	logout: {
		eng: 'Logout',
		pl: 'Wyloguj',
	},
	mealTypes: {
		eng: 'Meal types',
		pl: 'Rodzaje dań',
	},
	dishes: {
		eng: 'Dishes',
		pl: 'Dania',
	},
	findFoodHere: {
		eng: 'Find your meal here...',
		pl: 'Szukaj swojego dania...',
	},
})

const getTranslation = (translation: string): string => {
	const lang = 'eng'
	return _.get(translations, [translation, lang], '')
}

export default getTranslation
