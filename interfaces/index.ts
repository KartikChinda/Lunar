export interface ProductFields {
    id: number,
    name: string;
    price: string;
    description: string;
    rating: {
        range: string;
        count: number;
    }
}

export interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
    description: string,
    rating: {
        range: string,
        count: number,
    }
}

export interface CartState {
    items: CartItem[];
}