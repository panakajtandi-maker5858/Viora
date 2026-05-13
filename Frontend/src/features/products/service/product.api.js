import { applyMiddleware } from "@reduxjs/toolkit"
import axios, { formToJSON } from "axios"


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

export async function addProductVariant( productId , newProductVariant){

console.log(newProductVariant)

const formData = new FormData()

newProductVariant.images.forEach((image)=>{
    formData.append(`images`, image.file)
})

formData.append("stock" , newProductVariant.stock)
formData.append("priceAmount" , newProductVariant.price)
formData.append("attributes" , JSON.stringify(newProductVariant.attributes))

const response = await productApiinstance.post(`/${productId}/variants` , formData)

return response.data

}