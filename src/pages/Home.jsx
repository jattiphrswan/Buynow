import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductSlider from "../components/ProductSlider";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const slides = [
    {
      id: 1,
      title: "Discover Premium Lifestyle Essentials",
      subtitle:
        "Curated collection of high-quality products for your everyday life.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80",
      cta: "Shop Now",
      link: "/shop?category=Furniture",
    },
    {
      id: 2,
      title: "Next-Gen Audio Experience",
      subtitle:
        "Immerse yourself in crystal clear sound with our latest headphones.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&auto=format&fit=crop&q=80",
      cta: "View Electronics",
      link: "/shop?category=Electronics",
    },
    {
      id: 3,
      title: "Elevate Your Workspace",
      subtitle: "Ergonomic furniture designed for productivity and comfort.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80",
      cta: "Shop Furniture",
      link: "/shop?category=Furniture",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Slider */}
      <section className="relative w-full bg-gray-900 text-white h-[600px] overflow-hidden group">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background image + gradient */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-40"
              />
              {/* fixed gradient + no click blocking */}
              <div className="absolute inset-0 bg-gradient-to-black from-gray-900 via-gray-900/60 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                    <Link
                      to={slide.link}
                      className="px-8 py-3 bg-gray-900 hover:bg-gray-800 active:shadow-inner text-white font-semibold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-gray-900/30"
                    >
                      {slide.cta} <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-brand-primary w-8"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                Featured Collection
              </h2>
              <p className="text-gray-600 max-w-xl">
                Hand-picked favorites just for you. Explore our most popular
                items.
              </p>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Slider */}
     
      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to DigiShop
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Your trusted destination for premium lifestyle products. We
              believe in bringing you the finest selection of electronics, home
              essentials, and fashion accessories that enhance your everyday
              life.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              With a commitment to quality, authenticity, and customer
              satisfaction, we've curated a collection that meets the highest
              standards. Every product is carefully selected to ensure it
              delivers exceptional value and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
              <p className="text-gray-400">
                We source only the finest materials for our products.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Shipping</h3>
              <p className="text-gray-400">
                Get your orders delivered to your doorstep in no time.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-400">
                Our dedicated team is here to help you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Promo */}
      <section className="py-16 bg-brand-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden h-80 group">
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=80"
                alt="Electronics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  New Tech Arrivals
                </h3>
                <p className="text-gray-200 mb-6">
                  Latest gadgets and accessories.
                </p>
                <Link
                  to="/shop?category=electronics"
                  className="self-start px-6 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 active:shadow-inner transition-colors"
                >
                  Shop Electronics
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-80 group">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80"
                alt="Fashion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Summer Fashion
                </h3>
                <p className="text-gray-200 mb-6">
                  Upgrade your wardrobe today.
                </p>
                <Link
                  to="/shop?category=fashion"
                  className="self-start px-6 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 active:shadow-inner transition-colors"
                >
                  Shop Fashion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-brand-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#00ABE4_1px,transparent_1px)] [background-size:16px 16px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 animate-fade-in-up">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Stay updated with our latest products, exclusive offers, and more.
            Join our community today!
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-white shadow-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 active:shadow-inner transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
