import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useCart } from '../hook/useCart'
import { Link, useNavigate } from 'react-router'

const tokens = {
    surface: '#fbf9f6',
    surfaceLow: '#f5f3f0',
    surfaceLowest: '#ffffff',
    surfaceHigh: '#eae8e5',
    surfaceHighest: '#e4e2df',
    onSurface: '#1b1c1a',
    onSurfaceVariant: '#4d463a',
    secondary: '#7A6E63',
    muted: '#B5ADA3',
    primary: '#C9A96E',
    primaryDark: '#745a27',
    outlineVariant: '#d0c5b5',
    outline: '#7f7668',
}

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const { handleGetCart, handleIncrementCartItem } = useCart()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    const [quantities, setQuantities] = useState({})

    useEffect(() => {
        handleGetCart()
    }, [])

    const changeQty = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] ?? 1) + delta),
        }))
    }

    const getVariantDetails = (product, variantId) => {
        if (!product?.variants || !variantId) return null
        return product.variants
    }

    const getDisplayImage = (product, variant) => {
        if (variant?.images?.length) return variant.images[0].url
        if (product?.images?.length) return product.images[0].url
        return null
    }

    const formatCurrency = (amount, currency = 'INR') =>
        `${currency} ${Number(amount).toLocaleString('en-IN')}`

    /* ── Empty state ── */
    if (!cart?.items?.length) {
        return (
            <>
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <div
                    className="min-h-screen flex flex-col"
                    style={{ backgroundColor: tokens.surface, fontFamily: "'Inter', sans-serif" }}
                >
                    <div className="flex-1 flex flex-col items-center justify-center gap-6 pb-24 px-8">
                        <p
                            className="text-5xl md:text-6xl font-light leading-tight"
                            style={{ fontFamily: "'Cormorant Garamond', serif", color: tokens.onSurface }}
                        >
                            Your selection is empty.
                        </p>
                        <p
                            className="text-[10px] uppercase tracking-[0.22em]"
                            style={{ color: tokens.muted }}
                        >
                            Curate your collection
                        </p>
                        <Link
                            to="/"
                            className="mt-4 px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300"
                            style={{ backgroundColor: tokens.onSurface, color: tokens.surface }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = tokens.primary
                                e.currentTarget.style.color = tokens.onSurface
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = tokens.onSurface
                                e.currentTarget.style.color = tokens.surface
                            }}
                        >
                            Explore the Archive
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />

            <div
                className="min-h-screen pb-24 selection:bg-[#C9A96E]/30"
                style={{ backgroundColor: tokens.surface, fontFamily: "'Inter', sans-serif" }}
            >
                <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 pt-12 lg:pt-20">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                        {/* LEFT COLUMN — Cart Items */}
                        <div className="w-full lg:w-[65%]">

                            <div className="mb-10">
                                <h1
                                    className="font-light leading-[1.05] mb-2"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        color: tokens.onSurface,
                                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    }}
                                >
                                    Your Selection
                                </h1>
                                <p
                                    className="text-[10px] uppercase tracking-[0.24em] font-medium"
                                    style={{ color: tokens.muted }}
                                >
                                    {cart?.items?.length} {cart?.items?.length === 1 ? 'piece' : 'pieces'}
                                </p>
                            </div>

                            {/* Cart Items List */}
                            <div className="flex flex-col gap-6">
                                {cart.items.map(item => {
                                    const { product, variant: variantId, price, product: { _id } } = item
                                    const variantDetail = getVariantDetails(product, variantId)
                                    const imageUrl = getDisplayImage(product, variantDetail)
                                    const displayPrice = price ?? variantDetail?.price ?? product?.price
                                    const qty = quantities[_id] ?? item.quantity ?? 1
                                    const attributes = variantDetail?.attributes ?? {}
                                    const stock = variantDetail?.stock
                                    const variantPrice = variantDetail?.price

                                    return (
                                        <div
                                            key={_id}
                                            className="flex gap-6 md:gap-8 p-6 md:p-8 transition-all duration-300"
                                            style={{ backgroundColor: tokens.surfaceLow }}
                                        >
                                            {/* Product Image */}
                                            <div
                                                className="flex-shrink-0 overflow-hidden"
                                                style={{
                                                    width: 'clamp(100px, 15vw, 160px)',
                                                    aspectRatio: '4/5',
                                                    backgroundColor: tokens.surfaceHighest,
                                                }}
                                            >
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt={product?.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full" style={{ backgroundColor: tokens.surfaceHigh }} />
                                                )}
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h2
                                                        className="font-light leading-tight mb-3"
                                                        style={{
                                                            fontFamily: "'Cormorant Garamond', serif",
                                                            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                                                            color: tokens.onSurface,
                                                        }}
                                                    >
                                                        {product?.title}
                                                    </h2>

                                                    {/* Variant Attribute Chips */}
                                                    {Object.keys(attributes).length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {Object.entries(attributes).map(([key, val]) => (
                                                                <span
                                                                    key={key}
                                                                    className="px-3 py-1 text-[9px] uppercase tracking-[0.18em] font-medium"
                                                                    style={{ backgroundColor: tokens.primary, color: '#fff' }}
                                                                >
                                                                    {val}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Price */}
                                                    <p
                                                        className="text-[11px] uppercase tracking-[0.2em] font-medium mb-1"
                                                        style={{ color: tokens.onSurface }}
                                                    >
                                                        {displayPrice
                                                            ? formatCurrency(displayPrice.amount, displayPrice.currency)
                                                            : '—'}
                                                    </p>

                                                    {/* Stock */}
                                                    {stock !== undefined && (
                                                        <p
                                                            className="text-[10px] uppercase tracking-[0.15em] mb-4"
                                                            style={{ color: tokens.muted }}
                                                        >
                                                            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Quantity */}
                                                <div className="flex items-center">
                                                    <button onClick={() => changeQty(_id, -1)}>−</button>
                                                    <span>{qty}</span>
                                                    <button onClick={() => handleIncrementCartItem({ productId: _id, variantId })}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart