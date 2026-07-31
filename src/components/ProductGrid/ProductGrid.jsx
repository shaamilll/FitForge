import { motion } from 'framer-motion';
import ProductCard from '../ProductCard';

const ProductGrid = ({ products = [] }) => {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">
        No products to display.
      </p>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-label="Product listing"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          rating={product.rating}
          badge={product.badge}
          isWishlisted={product.isWishlisted}
          onAddToCart={() => {}}
          onWishlistToggle={() => {}}
        />
      ))}
    </motion.section>
  );
};

export default ProductGrid;