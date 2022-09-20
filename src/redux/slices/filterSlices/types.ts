export type Sort = {
	name: string;
	sortProperty: string;
};

export interface IFilter {
	category: string;
	sort: Sort;
}
