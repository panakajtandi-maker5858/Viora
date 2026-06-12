import express from "express"
import { authenticateUser } from "../middlewares/auth.middleware.js"
import { validateAddToCart , validateIncrementCartItemQuantity } from "../validator/cart.validator.js"
import { addToCart , getCart ,incrementCartItemQuantity , decrementCartItemQuantity, removeCartItem , verifyOrderController , createOrderController } from "../controllers/cart.controller.js"


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


/**
 * @route PATCH /api/cart/quantity/decrement/:productId/:variantId
 * @desc Decrement item quantity in cart by one
 * @access Private
 */
router.patch("/quantity/decrement/:productId/:variantId", authenticateUser, validateIncrementCartItemQuantity, decrementCartItemQuantity)



/**
 * @route PATCH /api/cart/remove/"productId/:variantId 
 * @desc To remove entire product from cart 
 * @access Private
 */
router.delete("/remove/:productId/:variantId", authenticateUser, removeCartItem)


/**
 * @route POST /api/cart/payment/create/order
 * @desc Create Razorpay order
 * @access Private
 */
router.post("/payment/create/order", authenticateUser, createOrderController)



/**
 * @route POST /api/cart/payment/verify/order
 * @desc Verify Razorpay payment
 * @access Private
 */
router.post("/payment/verify/order", authenticateUser, verifyOrderController)










export default router ;