import { getProductModel, deleteProductModel, createProductModel, updateProductModel, getProductByIdModel } from "../models/product.model.js";

export const getProduct = async (req,res) => {
    console.log("Get products");
    const userId = req.params.userId;
    let data = await getProductModel(userId);
    res.status(data.status).send(data);
}

export const getProductById = async (req,res) => {
    console.log("Get product");
    const productId = req.params.productId;
    let data = await getProductByIdModel(productId);
    res.status(data.status).send(data);
}

export const deleteProduct = async (req,res) => {
    console.log("Delete product");
    const productId = req.params.productId;
    let data = await deleteProductModel(productId);
    res.status(data.status).send(data);
}

export const saveProduct = async (req,res) => {
    console.log("save product");
    let data = await createProductModel(req.body);
    res.status(data.status).send(data);
    
}

export const updateProduct = async (req,res) => {
    console.log("update product");
    const productId = req.params.productId;
    let data = await updateProductModel(req.body, productId);
    res.status(data.status).send(data);
}

