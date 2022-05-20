const Express = require('express');
const Products = require('./products');

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended: true}))



app.get("/products/:id", (req, res)=> {
   
      const product =   Products.find((product)=> {
        return +req.params.id === product.id;
    
    })
    if(product === undefined)res.sendStatus(404);
    res.send(req.params.id);

})

app.post("/add", (req, res) => {
    console.log('here '+req.body.id);
    res.sendStatus(200);
})


module.exports = app

