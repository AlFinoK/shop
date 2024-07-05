import type { ILinks } from '../types/interfaces'

export const links: ILinks[] = [
	{
		to: '/',
		imgSrc: '/home.svg',
		alt: 'home link',
		text: 'Home',
	},

	{
		to: '/products',
		imgSrc: '/products.svg',
		alt: 'products link',
		text: 'Products',
	},

	{
		to: '/favorites',
		imgSrc: '/favorites.svg',
		alt: 'favorites link',
		text: 'Favorites',
		favItems: true,
	},

	{
		to: '/cart',
		imgSrc: '/cart.svg',
		alt: 'cart link',
		text: 'Cart',
		cartItems: true,
	},
]
