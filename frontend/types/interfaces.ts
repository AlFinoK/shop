export interface ILinks {
	to: string
	imgSrc: string
	alt?: string
	text?: string
	quantity?: boolean
	cartItems?: boolean
	favItems?: boolean
}

export interface IProduct {
	id: number
	title: string
	price: number
	description?: string
	category?: string
	image?: string
	rating?: {
		rate: number
		count: number
	}
}

export interface ICartItem {
	product: IProduct
	quantity: number
}
