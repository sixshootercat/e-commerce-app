import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// Selector to convert an object into an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// Collection state object
export const selectCollection = (collectionUrlParam) =>
  createSelector(selectCollections, (collections) =>
    collections ? collections[collectionUrlParam] : {}
  );

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
