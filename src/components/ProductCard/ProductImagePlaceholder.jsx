import { FaTshirt } from 'react-icons/fa';

const ProductImagePlaceholder = ({ label = 'Image coming soon' }) => {
  return (
    <div
      role="img"
      aria-label={label}
      className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <FaTshirt className="text-3xl text-orange-500/80" />
      <span className="text-[11px] uppercase tracking-wide text-gray-400">
        {label}
      </span>
    </div>
  );
};

export default ProductImagePlaceholder;