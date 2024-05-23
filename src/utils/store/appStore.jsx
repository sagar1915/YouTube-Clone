import { configureStore } from "@reduxjs/toolkit";
import sideBarToggleSlice from "../store/slice";

const store = configureStore({
	reducer: {
		togglesidebar: sideBarToggleSlice,
	},
});

export default store;
