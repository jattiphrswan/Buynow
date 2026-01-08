import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, TrendingUp, Heart, ShoppingBag, Zap, Target, Shield } from 'lucide-react';

const About = () => {
    const achievements = [
        { icon: Award, label: "India's No.1 Audio Brand", description: "2020-2024", color: "bg-blue-500" },
        { icon: Users, label: "10M+ Happy Customers", description: "Growing Family", color: "bg-green-500" },
        { icon: TrendingUp, label: "500+ Products", description: "Premium Collection", color: "bg-purple-500" },
        { icon: Heart, label: "98% Satisfaction", description: "Customer Rating", color: "bg-pink-500" }
    ];

    const values = [
        { icon: Zap, title: "Innovation", description: "Pushing boundaries with cutting-edge technology", color: "text-yellow-500" },
        { icon: Heart, title: "Quality", description: "Premium products that last", color: "text-red-500" },
        { icon: Users, title: "Community", description: "Building a tribe of trendsetters", color: "text-blue-500" }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section with Professional Banner */}
            <section className="relative text-white py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&auto=format&fit=crop&q=80"
                        alt="Professional Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/70" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up text-white drop-shadow-lg">
                            Welcome to DigiShop
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed animate-fade-in-up animation-delay-200 max-w-3xl mx-auto drop-shadow-md">
                            Where premium quality meets affordable luxury. We're not just a store, we're a lifestyle revolution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section with Images */}
            <section className="py-16 md:py-24 bg-gradient-to-black from-white to-brand-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 animate-fade-in-up text-gray-900">
                            DigiShop Set Sail in <span className="text-brand-primary">2020</span>
                        </h2>
                        <p className="text-center text-gray-500 text-lg mb-16">Our Journey Begins</p>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            <div className="order-2 md:order-1">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                        During our exploration of the market, we discovered that people were searching for
                                        <strong className="text-brand-primary font-bold"> affordable, durable, and ultra-fashionable </strong>
                                        products to enhance their lifestyle.
                                    </p>
                                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                        Thus, in <span className="text-2xl font-bold text-brand-primary">2020</span>, we kickstarted a great journey in the world of e-commerce,
                                        bringing together <span className="font-semibold text-gray-900">quality and style</span> at prices that don't break the bank.
                                    </p>
                                    <div className="bg-brand-primary/10 border-l-4 border-brand-primary p-6 rounded-r-lg">
                                        <p className="text-gray-800 italic font-medium">
                                            "We believe everyone deserves access to premium products without compromising on quality or design."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <img
                                    src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&auto=format&fit=crop&q=80"
                                    alt="Our Journey"
                                    className="rounded-2xl shadow-2xl hover:shadow-brand-primary/20 transition-shadow duration-300"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                                    alt="Our Team"
                                    className="rounded-2xl shadow-2xl hover:shadow-brand-primary/20 transition-shadow duration-300"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    Building <span className="text-brand-primary">Together</span>
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    From day one, our focus has been on understanding what our customers truly need. We've built a community of enthusiasts who share our passion for innovation and style.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Today, we're proud to serve millions of customers across the nation, continuously evolving to meet their expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section - Light Background for Visibility */}
            <section className="py-16 md:py-24 bg-brand-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <Target className="w-16 h-16 mx-auto mb-6 text-brand-primary" />
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 animate-fade-in-up text-gray-900">
                                Our Mission & Vision
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white rounded-2xl p-8 border-2 border-brand-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
                                    <Shield className="w-8 h-8 text-brand-primary" />
                                    Our Mission
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    To democratize access to premium lifestyle products by offering exceptional quality at affordable prices.
                                    We strive to make luxury accessible to everyone, breaking down barriers between aspiration and reality.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border-2 border-brand-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
                                    <Zap className="w-8 h-8 text-brand-primary" />
                                    Our Vision
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    To become India's most trusted e-commerce platform, known for innovation, quality, and customer-centricity.
                                    We envision a future where every Indian has access to world-class products at their fingertips.
                                </p>
                            </div>
                        </div>

                        <div className="text-center bg-gray-900 text-white rounded-2xl p-10 shadow-xl">
                            <p className="text-2xl md:text-3xl font-bold mb-4">
                                Empowering Lives Through Innovation
                            </p>
                            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                                We believe in the power of technology to transform lives. Every product we offer is carefully curated to
                                enhance your lifestyle, boost your productivity, and bring joy to your everyday experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Focus - Dark Background */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
                            Who Are Our Customers?
                        </h2>
                        <div className="bg-gray-900 text-white rounded-3xl p-12 mb-12 shadow-2xl">
                            <p className="text-5xl md:text-6xl font-extrabold mb-6">It's You!</p>
                            <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
                                Someone who loves quality, is always on the move, and passionate about reaching their goals!
                            </p>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-gray-900">
                            Together, we are an ever-growing community of trendsetters and achievers! 🚀
                        </p>
                    </div>
                </div>
            </section>

            {/* Achievements - Enhanced with Colors */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 animate-fade-in-up text-gray-900">
                        Our <span className="text-brand-primary">Achievements</span>
                    </h2>
                    <p className="text-center text-gray-500 text-lg mb-16">Milestones That Define Us</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-brand-primary"
                                >
                                    <div className={`w-20 h-20 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                                        {achievement.label}
                                    </h3>
                                    <p className="text-gray-500">{achievement.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Values - Fixed Hover Colors */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 animate-fade-in-up">
                        What Drives Us
                    </h2>
                    <p className="text-center text-gray-500 text-lg mb-16">Our Core Values</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="text-center p-8 border-2 border-gray-200 rounded-2xl hover:border-brand-primary transition-all duration-300 group bg-white hover:shadow-xl">
                                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                                        <Icon className={`w-10 h-10 ${value.color} group-hover:text-white transition-colors duration-300`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section with Light Blue Background */}
            <section className="py-16 md:py-24 bg-brand-secondary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
                        Ready to Join Our Community?
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-700">
                        Explore our premium collection and discover products that match your lifestyle.
                        Start your journey with DigiShop today!
                    </p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-3 px-12 py-5 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 active:shadow-inner transition-all shadow-xl text-lg hover:scale-105 transform"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        Start Shopping Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
