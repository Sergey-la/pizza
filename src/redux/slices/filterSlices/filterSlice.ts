import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IFilter } from './types';

const initialState: IFilter = {
	category: 'Все',
	sort: {
		name: 'популярности',
		sortProperty: 'rating',
	},
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategory(state, action: PayloadAction<string>) {
			state.category = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
	},
});

export const { setCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;
