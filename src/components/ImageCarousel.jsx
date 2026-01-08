import React from 'react';

const ImageCarousel = () => {
    // Array of product images
    const images = [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=300&fit=crop"
    ];

    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <div className="w-full overflow-hidden bg-gray-50 py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Products Gallery</h2>

            {/* Row 1 - Scrolling Right */}
            <div className="relative mb-8">
                <div className="flex animate-scroll-right">
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={`right-${index}`}
                            className="shrink-0 w-80 h-60 mx-4 rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={image}
                                alt={`Product ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 - Scrolling Left */}
            <div className="relative">
                <div className="flex animate-scroll-left">
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={`left-${index}`}
                            className="shrink-0 w-80 h-60 mx-4 rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={image}
                                alt={`Product ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
