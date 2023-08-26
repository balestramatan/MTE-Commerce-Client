export const RoutesParams = {
  id: "id",
  token: "token",
  user: "user",
  username: "username",
  password: "password",
  sectionName: "sectionName",
  categoryName: "categoryName",
  productName: "productName",
};

export const RoutesUrl = {
  welcome: "/",
  auth: "/auth",
  profile: "/profile",
  productsPage: `/products-page/:${RoutesParams.sectionName}`,
  productDetails: `/product-details/:${RoutesParams.productName}`,
};
