export const RoutesParams = {
    id: "id",
    token: "token",
    user: "user",
    username: "username",
    password: "password",
    productName: "productName",
    categoryName: "categoryName"
};

export const RoutesUrl = {
    welcome: "/",
    auth: "/auth",
    productsPage: `/products-page/:${RoutesParams.categoryName}`,
    productDetails: `/product-details/:${RoutesParams.productName}`,
};
