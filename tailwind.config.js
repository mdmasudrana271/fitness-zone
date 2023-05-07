/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#9BB70D",
        secondaryColor: "#88A00B",
      },
      backgroundImage: {
        'bg_image':"url('/public/bg1.jpg')",
        'bg_image2':"url('/public/bg1.jpg')",
        'pattern3':"url('/assets/img/pattern3.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
