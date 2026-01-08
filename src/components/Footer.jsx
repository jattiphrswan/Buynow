import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-0 w-full">
            <div className="w-full">
                {/* Main Footer Content - Contained */}
                <div className="container mx-auto px-4 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {/* Logo Column - FIRST */}
                        <div className="col-span-2 md:col-span-3 lg:col-span-1">
                            <Link to="/" className="text-3xl font-extrabold text-white mb-4 block tracking-tight">
                                DigiShop
                            </Link>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Premium products for your premium lifestyle. Quality guaranteed.
                            </p>
                        </div>

                        {/* Shop Column */}
                        <div>
                            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Shop</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link to="/shop?category=earbuds" className="hover:text-brand-primary transition-colors">True Wireless Earbuds</Link></li>
                                <li><Link to="/shop?category=headphones" className="hover:text-brand-primary transition-colors">Wireless Headphones</Link></li>
                                <li><Link to="/shop?category=wired" className="hover:text-brand-primary transition-colors">Wired Headphones</Link></li>
                                <li><Link to="/shop?category=speakers" className="hover:text-brand-primary transition-colors">Wireless Speakers</Link></li>
                                <li><Link to="/shop?category=audio" className="hover:text-brand-primary transition-colors">Home Audio</Link></li>
                                <li><Link to="/shop?category=accessories" className="hover:text-brand-primary transition-colors">Mobile Accessories</Link></li>
                                <li><Link to="/shop?category=watches" className="hover:text-brand-primary transition-colors">Smart Watches</Link></li>
                                <li><Link to="/shop?category=trimmers" className="hover:text-brand-primary transition-colors">TRebel Misfit Trimmers</Link></li>
                                <li><Link to="/refer" className="hover:text-brand-primary transition-colors">Refer & Earn</Link></li>
                            </ul>
                        </div>

                        {/* Help Column */}
                        <div>
                            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Help</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link to="/track-order" className="hover:text-brand-primary transition-colors">Track Your Order</Link></li>
                                <li><Link to="/warranty" className="hover:text-brand-primary transition-colors">Warranty & Support</Link></li>
                                <li><Link to="/returns" className="hover:text-brand-primary transition-colors">Return Policy</Link></li>
                                <li><Link to="/service-centers" className="hover:text-brand-primary transition-colors">Service Centers</Link></li>
                                <li><Link to="/bulk-orders" className="hover:text-brand-primary transition-colors">Bulk Orders</Link></li>
                                <li><Link to="/why-buy-direct" className="hover:text-brand-primary transition-colors">Why Buy Direct</Link></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Company</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link to="/about" className="hover:text-brand-primary transition-colors">About DigiShop</Link></li>
                                <li><Link to="/news" className="hover:text-brand-primary transition-colors">News</Link></li>
                                <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Read Our Blog</Link></li>
                                <li><Link to="/careers" className="hover:text-brand-primary transition-colors">Careers</Link></li>
                                <li><Link to="/security" className="hover:text-brand-primary transition-colors">Security</Link></li>
                                <li><Link to="/investors" className="hover:text-brand-primary transition-colors">Investor Relations</Link></li>
                                <li><Link to="/social-responsibility" className="hover:text-brand-primary transition-colors">Social Responsibility</Link></li>
                            </ul>
                        </div>

                        {/* Follow Us Column */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Let's Get Social</h4>
                            <div className="flex gap-4 mb-6">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer - FULL WIDTH */}
                <div className="w-full border-t border-gray-800 pt-8 pb-6 bg-gray-950">
                    <div className="container mx-auto px-4">
                        {/* Multi-column layout for bottom footer */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Left: Copyright */}
                            <div className="text-xs text-gray-500">
                                <p className="mb-2">&copy; {new Date().getFullYear()} Imagine Marketing Limited. All Rights Reserved.</p>
                            </div>

                            {/* Right: Links */}
                            <div className="flex flex-wrap gap-4 text-xs text-gray-400 md:justify-end">
                                <Link to="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
                                <span className="text-gray-700">|</span>
                                <Link to="/terms-of-use" className="hover:text-brand-primary transition-colors">Terms of Use</Link>
                                <span className="text-gray-700">|</span>
                                <Link to="/warranty-policy" className="hover:text-brand-primary transition-colors">Warranty Policy</Link>
                                <span className="text-gray-700">|</span>
                                <Link to="/d2d-repair" className="hover:text-brand-primary transition-colors">D2D Repair Policy</Link>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="text-xs text-gray-500 leading-relaxed">
                            <p>
                                <strong className="text-gray-400">For queries contact us:</strong> Manager, Imagine Marketing Limited
                                <span className="mx-2">•</span>
                                Unit no. 204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
