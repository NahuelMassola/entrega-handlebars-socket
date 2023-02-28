import ProductManager from "../Controller/ProductManager.js";
import { Server } from "socket.io";


const Product = new ProductManager();
const connectionSocket = (server)=>{
    let io = new Server(server);
    io.on ('connection', async (socket)=>{
        console.log("Nuevo Clinte conectado")
        let products = await Product.getProducts();
        socket.emit('init-products', products)
    })

    const emitDeleteProduct = (id)=>{
        io.emit('delete-product', {id})
    }

    const emitaddRealtime = (add)=>{
        io.emit('add-product',{add} )
    }

}

export default  connectionSocket ; 
