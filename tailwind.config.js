/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          start: '#0EA5E9',
          end: '#06B6D4',
          hover: '#0284C7',
        },
        accent: {
          blue: '#3B82F6',
          teal: '#14B8A6',
          cyan: '#06B6D4',
        },
        base: {
          bg: '#F0F9FF',
          text: '#0C4A6E',
          secondary: '#0369A1',
          border: '#BAE6FD',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': '64px',
        'h2': '40px',
        'h3': '28px',
        'body': '18px',
        'small': '14px',
      },
      borderRadius: {
        'custom': '24px',
      },
      animation: {
        'scale-hover': 'scale 0.3s ease-in-out',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        counter: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
