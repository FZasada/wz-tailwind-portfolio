import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = 'md', variant = 'primary' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const variantClasses = {
    primary: 'border-primary border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray border-t-transparent'
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`
          ${sizeClasses[size]} 
          ${variantClasses[variant]}
          border-4 
          rounded-full 
          animate-spin
        `}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['primary', 'white', 'gray'])
};

export default LoadingSpinner;
