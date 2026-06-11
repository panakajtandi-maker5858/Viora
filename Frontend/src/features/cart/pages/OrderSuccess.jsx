import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { useCart } from '../hook/useCart'

const OrderSuccess = () => {
    const [searchParams] = useSearchParams()
    const orderId = searchParams.get('order_id')
    const { handleGetCart } = useCart()

    useEffect(() => {
        handleGetCart() // Cart refresh karo — empty ho jayegi
    }, [])

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />
            <div
                className="min-h-screen flex flex-col items-center justify-center px-8"
                style={{ backgroundColor: '#fbf9f6', fontFamily: "'Inter', sans-serif" }}
            >
                <div className="text-center max-w-md">

                    {/* Checkmark */}
                    <div
                        className="w-16 h-16 flex items-center justify-center mx-auto mb-8"
                        style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
                    >
                        <svg width="28" height="28" fill="none" stroke="#166534" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <p
                        className="text-[10px] uppercase tracking-[0.24em] font-medium mb-4"
                        style={{ color: '#C9A96E' }}
                    >
                        Order Confirmed
                    </p>

                    <h1
                        className="text-4xl lg:text-5xl font-light leading-tight mb-6"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1b1c1a' }}
                    >
                        Thank You
                    </h1>

                    <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: '#7A6E63' }}
                    >
                        Your order has been placed successfully. We will notify you once your order is shipped.
                    </p>

                    {orderId && (
                        <p
                            className="text-[10px] uppercase tracking-[0.15em] mb-10"
                            style={{ color: '#B5ADA3' }}
                        >
                            Order ID: {orderId}
                        </p>
                    )}

                    <div className="h-px w-14 mx-auto mb-10" style={{ backgroundColor: '#C9A96E' }} />

                    <Link
                        to="/"
                        className="px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 inline-block"
                        style={{ backgroundColor: '#1b1c1a', color: '#fbf9f6' }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#C9A96E'
                            e.currentTarget.style.color = '#1b1c1a'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = '#1b1c1a'
                            e.currentTarget.style.color = '#fbf9f6'
                        }}
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </>
    )
}

export default OrderSuccess