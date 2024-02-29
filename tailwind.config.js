/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sider-color': 'var(--sider-color)',
        'body-bg': 'var(--body-bg)'
      }
    }
  },
  variants: {},
  plugins: []
};
