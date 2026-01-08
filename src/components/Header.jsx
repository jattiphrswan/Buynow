import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, Search, X, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const categories = ["Electronics", "Accessories", "Furniture", "Home", "Footwear"];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-extrabold text-gray-900 shrink-0 tracking-tight">
                        DigiShop
                    </Link>

                    {/* Desktop Search */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-auto">
                        <form onSubmit={handleSearch} className="w-full relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </form>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {categories.slice(0, 3).map(cat => (
                            <Link
                                key={cat}
                                to={`/shop?category=${cat}`}
                                className="text-gray-600 hover:text-brand-primary transition-colors font-medium"
                            >
                                {cat}
                            </Link>
                        ))}
                        <Link to="/shop" className="text-gray-600 hover:text-brand-primary transition-colors font-medium">All Products</Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4 shrink-0">
                        <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
                            <ShoppingCart className="w-6 h-6 text-gray-600 group-hover:text-brand-primary transition-colors" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-brand-primary text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar / Drawer */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Drawer Content */}
                <div className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-2xl font-bold text-brand-primary">Menu</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="mb-8 relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none bg-gray-50"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </form>

                        {/* Mobile Navigation */}
                        <nav className="flex-1 overflow-y-auto">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Categories</h3>
                            <div className="space-y-2">
                                <Link
                                    to="/shop"
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-brand-secondary/50 text-gray-700 hover:text-brand-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="font-medium">All Products</span>
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                                {categories.map(cat => (
                                    <Link
                                        key={cat}
                                        to={`/shop?category=${cat}`}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-brand-secondary/50 text-gray-700 hover:text-brand-primary transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="font-medium">{cat}</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
