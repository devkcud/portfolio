/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#be185d',
          secondary: '#db2777',
          accent: '#4f46e5',
          neutral: '#1f2937',
          'base-100': '#04060C',
          info: '#2563eb',
          success: '#24cc24',
          warning: '#ecb636',
          error: '#d51a2a'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};
