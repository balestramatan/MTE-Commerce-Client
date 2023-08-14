export const RoutesParams = {
  id: "id",
  token: "token",
  user: "user",
  username: "username",
  password: "password",
  productName: "productName",
  sectionName: "sectionName",
};

export const RoutesUrl = {
  welcome: "/",
  auth: "/auth",
  collections: `/collections/:${RoutesParams.sectionName}`,
  productDetails: `/product-details/:${RoutesParams.productName}`,
};
