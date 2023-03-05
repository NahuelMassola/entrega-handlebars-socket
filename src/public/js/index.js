

const socket = io();
const btnForm = document.getElementById('btn-form');
const form = document.getElementById('add-prod');
const btnDel = document.getElementById('btn-del');

const newProd = e => {
	e.preventDefault();
	const data = new FormData(form);
	const prod = {
		title: data.get('title'),
		description: data.get('description'),
		category: data.get('category'),
		price: data.get('price'),
		code: data.get('code'),
		stock: data.get('stock')
	};
	socket.emit('addProd', prod);
	form.reset();
};

socket.on('delete-product'), (id)=>{
    const product = document.getElementById("id")
    product.remove(); 
}

//const delProd = async e => socket.emit('delProd' , e.target.id)

socket.on('init-products', (products)=>{
    const rowProducts = document.getElementById('rowProducts');
    rowProducts.innerHTML =" ";
    products.forEach(product => {
        rowProducts.innerHTML +=

        `<div class="card col-3 m-2 border border-4 id="${product.id} style="width: 18rem;">
            <img src="${product.thumbnail}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title text-center">${product.title}</h5>
                <p class="card-text text-center mb-0 ">${product.description}</p>
                <p class="card-text text-center">cod: ${product.code}</p>
                <h2 class="card-text text-center ">$ ${product.price}</h2>
                <p class="card-text text-center ">Cantidad: ${product.stock}</p>
                <div class="d-flex justify-content-center">
                    <button type="button" id=${product.id} class="btn-del">Delete</button>
                </div>
            </div>
        </div>`
    });
});



//document.addEventListener('click', e => e.target.matches('btn-del') && delProd(e));
btnForm.addEventListener('click', newProd);

