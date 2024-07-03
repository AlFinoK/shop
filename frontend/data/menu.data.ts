import type { ILinks } from '../types/interfaces'

export const links: ILinks[] = [
	{
		to: '/',
		imgSrc: '/home.svg',
		alt: 'home link',
		text: 'Home',
		quantity: false,
	},

	{
		to: '/products',
		imgSrc: '/products.svg',
		alt: 'products link',
		text: 'Products',
		quantity: false,
	},

	{
		to: '/favorites',
		imgSrc: '/favorites.svg',
		alt: 'favorites link',
		text: 'Favorites',
		quantity: false,
	},

	{
		to: '/cart',
		imgSrc: '/cart.svg',
		alt: 'cart link',
		text: 'Cart',
		quantity: true,
	},
]
