import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumApi } from "./apis/albumsApis";
import { photosApi } from "./apis/photosApis";
import { usersReducer } from "./slices/userSlices";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(albumApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUser";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
  useFetchAlbumQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApis";

export {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotoMutation,
} from "./apis/photosApis";
