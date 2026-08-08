import { motion } from 'framer-motion';
import ProductGrid from '../ProductGrid';
import products from '../../constants/products';

const FeaturedProducts = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-labelledby="featured-products-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <h2
          id="featured-products-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
        >
          Featured Products
        </h2>
        <p className="mt-3 text-gray-500 text-base md:text-lg">
          Performance-driven fitness apparel, engineered for movement and
          built to last.
        </p>
      </div>

      <ProductGrid products={products} />
    </motion.section>
  );
};

export default FeaturedProducts;