import express from 'express';
import { engine } from 'express-handlebars';
import { router } from './src/routes/index.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine({ extname: 'handlebars' }));
app.set('view engine', 'handlebars');
app.set('views', './src/views')
app.use(express.static('public'))

app.use('/', router);

app.listen(8080, () => console.log('running on 8080'));