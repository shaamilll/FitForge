import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import ProductImagePlaceholder from './ProductImagePlaceholder';

const ProductCard = ({
  image,
  name,
  category,
  price,
  rating = 0,
  badge,
  isWishlisted = false,
  onAddToCart,
  onWishlistToggle,
}) => {
  const hasValidPrice = typeof price === 'number' && !Number.isNaN(price);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300"
    >
      {/* Badge (New / Sale) */}
      {badge && (
        <span
          className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${
            badge === 'Sale' ? 'bg-orange-500 text-white' : 'bg-black text-white'
          }`}
        >
          {badge}
        </span>
      )}

      {/* Wishlist toggle */}
      <button
        type="button"
        onClick={onWishlistToggle}
        aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:scale-110 transition-transform duration-200"
      >
        {isWishlisted ? (
          <FaHeart className="text-orange-500 text-base" />
        ) : (
          <FaRegHeart className="text-gray-700 text-base" />
        )}
      </button>

      {/* Product image with zoom-on-hover, or placeholder */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        {image ? (
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        ) : (
          <ProductImagePlaceholder label={name ? `${name} — image coming soon` : 'Image coming soon'} />
        )}
      </div>

      {/* Product info */}
      <div className="p-4 flex flex-col gap-2">
        <p className="text-xs uppercase tracking-wide text-gray-500">{category}</p>
        <h3 className="text-base font-semibold text-gray-900 leading-snug">{name}</h3>

        {/* Star rating */}
        <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${i < Math.round(rating) ? 'text-orange-500' : 'text-gray-200'}`}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({rating.toFixed(1)})</span>
        </div>

        <p className="text-lg font-bold text-gray-900 mt-1">
          {hasValidPrice ? `$${price.toFixed(2)}` : 'Price unavailable'}
        </p>

        {/* Add to cart */}
        <motion.button
          type="button"
          onClick={onAddToCart}
          disabled={!hasValidPrice}
          whileHover={hasValidPrice ? { scale: 1.03 } : undefined}
          whileTap={hasValidPrice ? { scale: 0.97 } : undefined}
          className={`mt-3 w-full py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
            hasValidPrice
              ? 'bg-black text-white hover:bg-gray-900'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.article>
  );
};

export default ProductCard;