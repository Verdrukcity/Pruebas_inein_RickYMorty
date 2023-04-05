import { configureStore } from '@reduxjs/toolkit'
import rickNMorty from "./Reducer"
export default configureStore({
  reducer: {rickNMorty}
})