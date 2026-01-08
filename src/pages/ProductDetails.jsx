import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, Star, Truck, ShieldCheck } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                <button onClick={() => navigate('/shop')} className="text-brand-primary hover:underline">
                    Back to Shop
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-brand-primary mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                {/* Product Image */}
                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Product Info */}
                <div>
                    <span className="text-brand-primary font-medium mb-2 block">{product.category}</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

                    <div className="flex items-center mb-6">
                        <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                        </div>
                        <span className="text-gray-500">(128 reviews)</span>
                    </div>

                    <p className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="border-t border-b border-gray-100 py-6 mb-8 space-y-4">
                        <div className="flex items-center text-gray-600">
                            <Truck className="w-5 h-5 mr-3 text-brand-primary" />
                            <span>Free shipping on orders over $50</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <ShieldCheck className="w-5 h-5 mr-3 text-brand-primary" />
                            <span>2-year warranty included</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center border border-gray-300 rounded-full">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-full transition-colors"
                            >
                                -
                            </button>
                            <span className="px-4 font-medium text-gray-900">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-full transition-colors"
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-xl active:scale-95 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>
                        <button
                            onClick={() => {
                                addToCart(product, quantity);
                                navigate('/checkout');
                            }}
                            className="flex-1 bg-brand-secondary hover:bg-blue-500 hover:shadow-2xl active:scale-95 text-gray-900 hover:text-white border-2 border-gray-900 hover:border-blue-400 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-24">
                <div className="border-b border-gray-200 mb-8">
                    <div className="flex gap-8">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`pb-4 px-2 border-b-2 font-semibold transition-colors ${activeTab === 'description' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('additional')}
                            className={`pb-4 px-2 border-b-2 font-semibold transition-colors ${activeTab === 'additional' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                        >
                            Additional Information
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`pb-4 px-2 border-b-2 font-semibold transition-colors ${activeTab === 'reviews' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                        >
                            Reviews (128)
                        </button>
                    </div>
                </div>

                {activeTab === 'description' && (
                    <div className="max-w-4xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h3>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Experience premium quality with the {product.name}. This exceptional product is designed to deliver outstanding performance while maintaining elegant aesthetics. Built with the latest technology and premium materials, it offers unmatched durability and reliability.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Whether you're a professional or an enthusiast, this product meets all your needs with its comprehensive feature set. Every detail has been carefully crafted to ensure maximum satisfaction and long-lasting performance.
                            </p>

                            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Features:</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                                <li>Premium build quality with attention to detail</li>
                                <li>Advanced technology for superior performance</li>
                                <li>Ergonomic design for maximum comfort</li>
                                <li>Energy-efficient and environmentally friendly</li>
                                <li>Easy to use with intuitive controls</li>
                                <li>Compatible with multiple devices and platforms</li>
                            </ul>

                            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">What's in the Box:</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>1x {product.name}</li>
                                <li>User manual and quick start guide</li>
                                <li>Warranty card</li>
                                <li>Charging cable (if applicable)</li>
                                <li>Protective case</li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'additional' && (
                    <div className="max-w-4xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h3>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <table className="w-full">
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold w-1/3">Brand</td>
                                        <td className="py-4 text-gray-900">DigiShop</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Model</td>
                                        <td className="py-4 text-gray-900">{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Category</td>
                                        <td className="py-4 text-gray-900">{product.category}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Color Options</td>
                                        <td className="py-4 text-gray-900">Black, White, Blue, Red</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Material</td>
                                        <td className="py-4 text-gray-900">Premium ABS Plastic, Aluminum</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Weight</td>
                                        <td className="py-4 text-gray-900">250g</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Dimensions</td>
                                        <td className="py-4 text-gray-900">15cm x 10cm x 5cm</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Connectivity</td>
                                        <td className="py-4 text-gray-900">Bluetooth 5.0, USB-C</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Battery Life</td>
                                        <td className="py-4 text-gray-900">Up to 20 hours</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Warranty</td>
                                        <td className="py-4 text-gray-900">2 Years Manufacturer Warranty</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-gray-600 font-semibold">Country of Origin</td>
                                        <td className="py-4 text-gray-900">Made in India</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="max-w-4xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>

                        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                            <div className="flex items-center gap-8">
                                <div className="text-center">
                                    <div className="text-5xl font-bold text-gray-900 mb-2">4.8</div>
                                    <div className="flex text-yellow-400 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm">Based on 128 reviews</p>
                                </div>
                                <div className="flex-1">
                                    {[5, 4, 3, 2, 1].map((rating) => (
                                        <div key={rating} className="flex items-center gap-4 mb-2">
                                            <span className="text-sm text-gray-600 w-12">{rating} star</span>
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: rating === 5 ? '75%' : rating === 4 ? '20%' : '5%' }}></div>
                                            </div>
                                            <span className="text-sm text-gray-600 w-12 text-right">
                                                {rating === 5 ? '96' : rating === 4 ? '26' : '6'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { name: "John Doe", rating: 5, date: "2024-01-15", review: "Absolutely love this product! The quality is outstanding and it exceeded my expectations. Highly recommended for anyone looking for top-notch performance." },
                                { name: "Sarah Smith", rating: 5, date: "2024-01-10", review: "Best purchase I've made this year. The build quality is excellent and it works flawlessly. Customer service was also very helpful." },
                                { name: "Mike Johnson", rating: 4, date: "2024-01-05", review: "Great product overall. Does exactly what it's supposed to do. Only minor issue is the packaging could be better, but the product itself is fantastic." }
                            ].map((review, index) => (
                                <div key={index} className="border-b border-gray-200 pb-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                            <div className="flex text-yellow-400 my-2">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500">{review.date}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 bg-brand-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all">
                            Write a Review
                        </button>
                    </div>
                )}
            </div>

            {/* Related Products */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products
                        .filter(p => p.category === product.category && p.id !== product.id)
                        .slice(0, 4)
                        .map(relatedProduct => (
                            <div key={relatedProduct.id} className="group cursor-pointer" onClick={() => navigate(`/product/${relatedProduct.id}`)}>
                                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
                                    <img
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-brand-primary transition-colors">{relatedProduct.name}</h3>
                                <p className="text-gray-500">${relatedProduct.price.toFixed(2)}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
