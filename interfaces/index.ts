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