import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
    const { cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        clearCart();
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Order Placed Successfully!</h2>
                <p className="text-gray-500 mb-8">Thank you for your purchase. You will receive an email confirmation shortly.</p>
                <p className="text-sm text-gray-400">Redirecting to home...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold mt-8 mb-6">Payment Details</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                            <input type="text" placeholder="0000 0000 0000 0000" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                <input type="text" placeholder="MM/YY" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                                <input type="text" placeholder="123" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                            </div>
                        </div>
                    </form>
                </div>

                <div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
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
                            <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${(cartTotal * 1.08).toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            form="checkout-form"
                            className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold hover:bg-gray-800 active:shadow-inner transition-colors"
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
