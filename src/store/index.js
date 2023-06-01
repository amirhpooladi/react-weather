import {configureStore} from "@reduxjs/toolkit"
import searchSlice from "./search-slice";



const store=configureStore({
    reducer:{mySearch:searchSlice}
})

export default store;