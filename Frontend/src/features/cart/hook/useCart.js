

export const useCart = ()=>{


    async function handleAddItem({ productId , variantId}) {
        console.log("Add to cart comming soon!" , { productId , variantId})
        
    }

    return {handleAddItem}

}