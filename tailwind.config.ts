import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir estas extensiones
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;


