import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSlider = ({ products, title = "Featured Products" }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, products.length]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    if (!products || products.length === 0) return null;

    return (
        <div className="w-full mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>

            <div className="relative group">
                {/* Slider Container */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect[16/6]">
                    <div
                        className="flex transition-transform duration-500 ease-out h-full"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="min-w-full h-full relative cursor-pointer"
                                onClick={() => navigate(`/product/${product.id}`)}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to from-black/70 via-black/20 to-transparent flex items-end">
                                    <div className="p-8 text-white">
                                        <p className="text-brand-secondary font-semibold mb-2">{product.category}</p>
                                        <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                                        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-white w-8'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
