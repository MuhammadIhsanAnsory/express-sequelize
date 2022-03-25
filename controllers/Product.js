import Product from '../models/Product.js'

// get all product
export const getProducts = async (req, res) => {
  try{
    const products = await Product.findAll()
    res.send(products)
  }catch(err){
    console.log(err);
  }
}

// show product
export const getProductById = async (req, res) => {
  try{
    const product = await Product.findAll({
      where: {
        id: req.params.id
      }
    })
    res.send(product[0])
  }catch(err){
    console.log(err);
  }
}

// create product
export const createProduct = async (req, res) => {
  try{
    await Product.create(req.body)
    res.json({
      "message": "Product created"
    })
  }catch(err) {
    console.log(err);
  }
}

// update product
export const updateProduct = async (req, res) => {
  try{
    await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "Product updated"
    })
  }catch(err) {
    console.log(err);
  }
}

// delete product
export const deleteProduct = async (req, res) => {
  try{
    await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      "message": "Product deleted"
    })
  }catch(err){
    console.log(err);
  }
}