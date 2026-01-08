import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-10 h-10 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/shop" className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 active:shadow-inner transition-colors">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="grow flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.name}</h3>
                                        <p className="text-gray-500 text-sm">{item.category}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="px-3 py-1 font-medium text-gray-900 border-l border-r border-gray-200 min-w-10 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>${(cartTotal * 0.08).toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${(cartTotal * 1.08).toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/checkout')}
                            className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold hover:bg-gray-800 active:shadow-inner transition-colors flex items-center justify-center gap-2"
                        >
                            Proceed to Checkout <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
