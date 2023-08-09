export const RoutesParams = {
    id: "id",
    token: "token",
    user: "user",
    username: "username",
    password: "password",
    productId: "productId"
};

export const RoutesUrl = {
    welcome: "/",
    auth: "/auth",
    collections: "/collections",
    productDetails: `/product-details/:${RoutesParams.productId}`
};
