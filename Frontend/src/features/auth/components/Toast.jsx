import React, { useEffect, useState } from 'react'

const Toast = ({ message, type = 'error', onClose }) => {

    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
            onClose?.()
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    if (!visible) return null

    return (
        <div
            className={`fixed top-6 right-6 z-50 px-6 py-4 text-sm font-medium tracking-wide shadow-lg transition-all duration-300 ${type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
            style={{ fontFamily: "'Inter', sans-serif", minWidth: '280px' }}
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    {type === 'success'
                        ? <span className="text-green-600 text-lg">✓</span>
                        : <span className="text-red-600 text-lg">✕</span>
                    }
                    <span>{message}</span>
                </div>
                <button
                    onClick={() => { setVisible(false); onClose?.() }}
                    className="opacity-50 hover:opacity-100 transition-opacity text-lg leading-none"
                >
                    
                </button>
            </div>
        </div>
    )
}

export default Toast