import List from "./components/List";
import Product from "./components/Product";

export const productsRoutes = [
    {
        path: "/product/:id",
        name: "Product",
        component: Product,
        exact: false,
    },
    { 
        path: "/", 
        name: "List", 
        component: List, 
        exact: true 
    },
];