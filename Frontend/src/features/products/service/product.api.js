import { applyMiddleware } from "@reduxjs/toolkit"
import axios from "axios"


const productApiinstance = axios.create({
    baseURL: "/api/products" ,
    withCredentials: true ,
})

export async function createProduct(formData){
    const response = await productApiinstance.post("/", formData)
    return response.data

}

export async function getSellerProduct() {
    const response = await productApiinstance.get("/seller")
    return response.data
    
}

export async function getAllProducts() {
    const resposne  = await productApiinstance.get("/")
    return resposne.data
    
}

export async function getProductById(productId) {
    const response = await productApiinstance.get(`/details/${productId}`)
    return response.data
    
}