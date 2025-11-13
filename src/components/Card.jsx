const Card = ({ children, className = '', hover = true, glassmorphism = false }) => {
  const baseStyles = 'rounded-custom transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const glassStyles = glassmorphism ? 'card-glassmorphism' : 'bg-white border border-base-border shadow-md';

  return (
    <div className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
