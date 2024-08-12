import ProductModel from '../models/product.model.js';

export default class ProductController {
    getProducts(req, res) {
        let products = ProductModel.get();
        res.render('products', { products });
    }

    getAddForm(req, res) {
        return res.render('new-product');
    }

    getUpdateForm(req, res) {
        const id = req.params.id;
        const productFound = ProductModel.getById(id);

        if (productFound) {
            res.render('update-product', { product: productFound });
        } else {
            res.status(404).send('Product not found');
        }
    }

    addNewProduct(req, res) {
        ProductModel.add(req.body);
        res.redirect('/');
    }

    updateProduct(req, res) {
        const id = req.params.id;
        const updatedData = {
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price
        };
        ProductModel.update(id, updatedData);
        res.redirect('/'); 
    }


    ready(req,res){
       return res.render('ready');
    }

deleteProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    const productFound = ProductModel.getById(id);


    if (productFound) {
        ProductModel.delete(id);
        let products = ProductModel.get();
        products.forEach((product, index) => {
            product.id = index + 1;
        });
        res.redirect('/');
    } else {
        res.status(404).send('Product not found');
    }
}
}

