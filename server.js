const express = require("express")
const Container = require('./container');

const product = new Container('./db.txt');

// crear el servidor

const app = express();
// configurar las rutas
app.get('/', (req, res) => {
	res.send(`<h1 style= "color:red">Bienvenido</h1> \n <h2>Puedes observar nuestros productos, agrega a la url lo siguiente:</h2> \n <h2 style= "color:blue">/productos</h2> \n <h2>o elegir un producto al azar</h2> \n <h2 style= "color:blue">/producto-random </h2>`);
});

// ruta de productos
app.get('/productos', async (req, res) => {
	const getProductos = await product.getAll();
	res.send(getProductos);
});

// ruta para recuperar un producto al azar
app.get('/producto-random', async (req, res) => {
	const getProduct = await product.getAll();
	const productRandom =
		getProduct[Math.floor(Math.random() * getProduct.length)];
	res.send(productRandom);
});

// ejecutar el servidor
app.listen(8080, () => {
	console.log(
		`servidor ejecutado en el puerto 8080 ${'http://localhost:8080/'}`
	);
});