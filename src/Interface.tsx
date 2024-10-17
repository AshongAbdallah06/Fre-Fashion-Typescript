export interface ContextType {
	title: string;
	heading: string;
	product: ProductType | null;
	setProduct: (value: ProductType) => void;
	cartDropdown: boolean;
	setCartDropdown: (value: boolean) => void;
	cartItems: ProductType[];
	setCartItems: (value: ProductType[]) => void;
	handleAddItem: (
		productName: string | null,
		productImage: string | undefined,
		productPrice: string | null,
		quantity: number
	) => void;
	handleRemoveItem: (id: number) => void;
	quantity: number;
	setQuantity: (quantity: number) => void;
	subtotal: number;
	isOrderPlaced: boolean;
	setIsOrderPlaced: (value: boolean) => void;
	orderInfo: OrderInfo | undefined;
	setOrderInfo: (value: OrderInfo | undefined) => void;
	selectedMethod: SelectedMethod;
	setSelectedMethod: (value: SelectedMethod) => void;
	calculateSubTotal: () => void;
}

export type OrderInfo = {
	cardNumber: string;
	city: string;
	email: string;
	expirationDate: string;
	name: string;
	postalCode: string;
	securityCode: string;
	state: string;
	streetAddress: string;
	streetAddress2?: string;
	selectedMethod: SelectedMethod;
	country?: string;
};

export type ProductType = {
	name: string | null;
	price: number;
	product_image: string | undefined;
	quantity: number | null;
	type: string | null;
	id: number;
};

export type Item = {
	id: number;
	name: string;
	price: number;
	product_image: string;
	quantity: number;
};

export type SelectedMethod = {
	name: string;
	amount: string;
	description: string;
};

export type OrderType = {
	cardNumber: string;
	city: string;
	email: string;
	expirationDate: string;
	name: string;
	postalCode: string;
	securityCode: string;
	state: string;
	streetAddress: string;
	streetAddress2?: string | undefined;
};
