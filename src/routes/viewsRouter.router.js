import { Router } from "express";
import ProductManager from "../Controller/ProductManager.js";



const viewsRouter = Router(); 
const Product = new ProductManager("../models/products.json");

viewsRouter.get("/" , async (req ,res) => {
    const  allProducts  = await Product.getProducts();
    res.render( "home" , {
    title: "express handlebars" ,
    allProducts
    })
})


export default viewsRouter;