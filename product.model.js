
class ProductModel {
    constructor(_id, _name, _desc, _price) {
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
    }

    static get() {
        return products;
    }

    static getById(id) {
        return products.find(product => product.id === parseInt(id));
    }

    static add(productObj) {
        let newProduct = new ProductModel(products.length + 1, productObj.name, productObj.desc, productObj.price);
        products.push(newProduct);
    }

    static update(id, updatedData) {
        let productIndex = products.findIndex(product => product.id === parseInt(id));
        if (productIndex > -1) {
            products[productIndex].name = updatedData.name;
            products[productIndex].desc = updatedData.desc;
            products[productIndex].price = updatedData.price;
        }
    }

  
        // Other methods...
    
        static delete(id) {
            const index = products.findIndex(p => p.id == id);
            if (index !== -1) {
                products.splice(index, 1);
            }
        }
    }
    
    // static delete(id){
    //     let productIndex = products.findIndex(product =>product.id === parseInt(id));
    //     if(productIndex > -1){
    //         products.splice(index,1);
    //     }
    // }



const products = [
    new ProductModel(1, 'Product 1', 'this is good', 19.99),
    new ProductModel(2, 'Product 2', 'this is good', 29.99),
    new ProductModel(3, 'Product 3', 'this is good', 39.99)
];

export default ProductModel;
