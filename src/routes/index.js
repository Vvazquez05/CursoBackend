import { Router } from 'express';
import { Contenedor } from '../components/contenedorProductos.js';

const contenedor = new Contenedor('products.txt');
const router = Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.post('/api/customers', (req, res) => {
    contenedor.save(req.body)
    res.redirect('/')
})

router.get('/customers', async (req, res) => {
    let customers = { customers: await contenedor.getAll() }
    console.log(customers)
    res.render('customers', customers)
})



export { router };