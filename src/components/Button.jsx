const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out';
  
  const variants = {
    primary: 'text-white bg-gradient-primary rounded-custom hover:shadow-lg hover:scale-105',
    secondary: 'text-base-text bg-white border-2 border-base-border rounded-custom hover:border-primary-start hover:shadow-md',
    outline: 'text-base-text bg-transparent border-2 border-current rounded-custom hover:bg-base-text hover:text-white',
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
