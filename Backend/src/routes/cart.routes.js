import express from "express"
import { authenticateUser } from "../middlewares/auth.middleware.js"
import { validateAddToCart , validateIncrementCartItemQuantity } from "../validator/cart.validator.js"
import { addToCart , getCart ,incrementCartItemQuantity , decrementCartItemQuantity, removeCartItem } from "../controllers/cart.controller.js"


const router = express.Router()

/**
 * @route POST /api/cart/add/:productId/:variantId
 * @desc Add item to cart 
 * @access Private
 */

router.post("/add/:productId/:variantId" , authenticateUser , validateAddToCart , addToCart)


/**
 * @route GET /api/cart
 * @desc Get user's cart 
 * @access Private
 */
router.get('/' , authenticateUser , getCart)


/**
 * @route PATCH /api/cart/quantity/increment/:productId/:variantId
 * @desc Increment item quantity in cart by one
 * @access Private
 */
router.patch("/quantity/increment/:productId/:variantId", authenticateUser, validateIncrementCartItemQuantity, incrementCartItemQuantity)


router.patch("/quantity/decrement/:productId/:variantId", authenticateUser, validateIncrementCartItemQuantity, decrementCartItemQuantity)


router.delete("/remove/:productId/:variantId", authenticateUser, removeCartItem)


export default router ;