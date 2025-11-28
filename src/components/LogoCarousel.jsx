/* eslint-disable react/prop-types */
const LogoCarousel = ({ logos = [] }) => {
  // logos: array of { src, alt }
  const items = [...logos, ...logos];
  return (
    <div className="logo-marquee">
      <div className="logo-marquee-track">
        {items.map((item, idx) => (
          <div key={`${item.alt || 'logo'}-${idx}`} className="logo-item">
            <div className="flex h-20 md:h-24 w-48 md:w-56 items-center justify-center px-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              {typeof item === 'string' ? (
                <span className="text-base md:text-lg font-semibold tracking-wide text-gray-800">{item}</span>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt || 'Client Logo'}
                  className="max-h-14 md:max-h-16 w-auto object-contain transition duration-300"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
