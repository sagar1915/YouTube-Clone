import { createSlice } from "@reduxjs/toolkit";

const sideBarToggleSlice = createSlice({
	name: "togglesidebar",
	initialState: {
		isOpen: true,
	},
	reducers: {
		togglebar: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { togglebar } = sideBarToggleSlice.actions;

export default sideBarToggleSlice.reducer;


