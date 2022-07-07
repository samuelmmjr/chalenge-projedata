const express = require('express');
const bodyParser = require('body-parser');

const controlProducts = require('./controller/products');

const app = express(); 

app.use(bodyParser.json());

app.get('/products', controlProducts.getAll);
app.get('/products/:id', controlProducts.getById);
app.post('/products', controlProducts.create);
app.put('/products/:id', controlProducts.update);
app.delete('/products/:id', controlProducts.remove);

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
}); 
