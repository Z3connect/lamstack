const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out';

  const variants = {
    primary: 'text-white bg-gradient-to-r from-primary-start to-primary-end rounded-custom hover:shadow-lg hover:shadow-primary-start/25 hover:scale-105',
    secondary: 'text-base-bg bg-white border-2 border-white rounded-custom hover:bg-gray-100 hover:border-gray-100 hover:shadow-md',
    outline: 'text-white bg-transparent border-2 border-white/20 rounded-custom hover:bg-white/10 hover:border-white/40',
    glass: 'text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-custom hover:bg-white/20 hover:border-white/40 hover:shadow-lg',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
