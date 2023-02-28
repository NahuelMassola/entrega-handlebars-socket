import { Router } from "express";
import ProductManager from "../Controller/ProductManager.js";
//import emitDeleteProduct from "../utils/socket.io.js"



const viewsRouter = Router(); 
const Product = new ProductManager();

viewsRouter.get("/" , async (req ,res) => {
    const  allProducts  = await Product.getProducts();
    res.render( "home" , {
    title: "express handlebars" ,
    allProducts
    })
})

viewsRouter.get("/realtimeproducts" , async (req ,res) => {
    const  allProducts  = await Product.getProducts();
    res.render('realTimeProducts' , {
    allProducts
    })
})

  viewsRouter.delete('/realtimeproducts/:pid' , async (req , res ) => {
        const id = +req.params.pid 
        const Delete = await Product.deleteProduct (id);
        if (Delete.erro){
          res.json(Delete);
        }else{
            emitDeleteProduct(id)
            res.json(Delete);
        }
    }
) 

viewsRouter.post("/realtimeproducts/" , async ( req ,res ) => {
    const body = req.body;
    const add = await Product.addProduct(body);
    if (add.erro){
        res.json(add)
    }else{
    emitaddRealtime(add)  
        res.json(add);
    }
})


export default viewsRouter;