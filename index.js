import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import methodOverride from 'method-override';
import path from 'path';
import ProductController from './src/controller/products.cont.js';

const server = express();

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(methodOverride('_method'));
server.set('view engine', 'ejs');
server.set('views', path.resolve('src', 'views'));
server.use(ejsLayouts);

const productController = new ProductController();

server.get('/', productController.getProducts);
server.get('/new', productController.getAddForm);
server.get('/update-products/:id', productController.getUpdateForm);
server.post('/', productController.addNewProduct);
server.put('/:id', productController.updateProduct);
server.get('/delete-product/:id', productController.deleteProduct);

server.get('/ready',productController.ready);


server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
