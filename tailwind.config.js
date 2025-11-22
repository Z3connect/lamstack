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
          start: '#38BDF8', // Light Sky Blue
          end: '#22D3EE',   // Cyan 400
          hover: '#0EA5E9', // Sky 500
        },
        accent: {
          blue: '#60A5FA', // Blue 400
          teal: '#2DD4BF', // Teal 400
          cyan: '#22D3EE', // Cyan 400
          purple: '#A78BFA', // Violet 400
        },
        base: {
          bg: '#0B1120',    // Very Dark Slate
          card: '#1E293B',  // Dark Slate
          text: '#F1F5F9',  // Slate 100
          muted: '#94A3B8', // Slate 400
          border: '#334155', // Slate 700
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': '72px',
        'h2': '48px',
        'h3': '32px',
        'body': '20px',
        'small': '16px',
      },
      borderRadius: {
        'custom': '24px',
      },
      animation: {
        'scale-hover': 'scale 0.3s ease-in-out',
        'counter': 'counter 2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        counter: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px -10px rgba(6, 182, 212, 0)' },
          'to': { boxShadow: '0 0 20px 5px rgba(6, 182, 212, 0.4)' },
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)',
        'gradient-dark': 'linear-gradient(to bottom right, #0B1120, #111827)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
