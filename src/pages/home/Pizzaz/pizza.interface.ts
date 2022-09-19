export interface IPizza {
	readonly id: number;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
}
export interface PizzaList {
	pizzaz: IPizza[];
}
