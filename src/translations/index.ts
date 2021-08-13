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
		pl: 'Menu Główne',
	},
	myOrder: {
		eng: 'My Order',
		pl: 'Moje zamówienia',
	},
	logout: {
		eng: 'Logout',
		pl: 'Wyloguj',
	},
	mealTypes: {
		eng: 'Meal types',
		pl: 'Rodzaje dań',
	},
	promoMeals: {
		eng: 'Promo',
		pl: 'Promocyjne',
	},
	justForYou: {
		eng: 'Just for you..',
		pl: 'Specjalnie dla Ciebie..',
	},
	recommendedMeals: {
		eng: 'Recommended',
		pl: 'Polecane',
	},
	mostWanted: {
		eng: 'Most wanted',
		pl: 'Najpopularniejsze',
	},
	all: {
		eng: 'All',
		pl: 'Wszystkie',
	},
	findFoodHere: {
		eng: 'Find your meal here...',
		pl: 'Szukaj swojego dania...',
	},
})

const getTranslation = (translation: string): string => {
	const lang = 'pl'
	return _.get(translations, [translation, lang], '')
}

export default getTranslation
