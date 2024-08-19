const { default: slugify } = require("slugify");
const Product = require("../models/product");
const slug = require("slugify");
const productController = {
  // create product
  addProduct: async (req, res) => {
    try {
      if (Object.keys(req.body).length == 0) {
        return res.status(500).json({
          success: false,
          mess: "Missing input",
        });
      }
      if ((req.body, req.body.title)) req.body.slug = slugify(req.body.title);
      const newProduct = await Product.create(req.body);
      return res.status(200).json({
        success: true,
        message: "Product created successfully",
        data: newProduct,
      });

    } catch (err) {
      return res.status(500).json({
        success: false,
        mess: "Error server",
      });
    }
   
  },
  /// get product
  getProduct: async (req,res) =>{
    try{
      const getProduct = await Product.find();
      return res.status(200).json({
        success: true,
        message: "Product get successfully",
        data: getProduct,
      });
    }catch(err){
      return res.status(500).json({
        success: false,
        mess: "Error server",
      });
    }
  },
  /// get one product
  getOneProduct: async (req,res) =>{
    try{
      const {pid} = req.params
      const getOneProduct = await Product.findById(pid);
      return res.status(200).json({
        success: true,
        message: "Product get one successfully",
        data: getOneProduct,
      });
    }catch(err){
      return res.status(500).json({
        success: false,
        mess: "Error server",
      });
    }
  },
  // update product
  updateProduct: async (req,res) =>{
    try{
      const {pid} = req.params
      const updateProduct = await Product.findByIdAndUpdate(pid, req.body,{new: true});
      return res.status(200).json({
        success: true,
        message: "Product update successfully",
        data: updateProduct,
      });
    }catch(err){
      return res.status(500).json({
        success: false,
        mess: "Error server",
      });
    }
  },
  deleteProduct: async (req,res) =>{
    try{
      const {pid} = req.params
      const deleteProduct = await Product.findByIdAndDelete (pid);
      return res.status(200).json({
        success: true,
        message: "Product delete successfully",
        data: deleteProduct,
      });
    }catch(err){
      return res.status(500).json({
        success: false,
        mess: "Error server",
      });
    }
  },
};
module.exports = productController;
