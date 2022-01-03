module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        xm: "2px",
      },
      colors: {
        blue: {
          100: "#F1F6FC",
          200: "#CDF0FF",
          300: "#6FC2FF",
          400: "#3390FD",
          500: "#1A6EFC",
          600: "#2C5DBD",
          700: "#293C7D",
          800: "#272F4E",
        },
        yellow: {
          100: "#FEF9E0",
          200: "#FFF7AD",
          300: "#FFE587",
          400: "#FCCD54",
          500: "#FBC02D",
          600: "#DE8F31",
          700: "#D3713A",
          800: "#B94F40",
        },
        pink: {
          100: "#FFF3F6",
          200: "#FFB2D7",
          300: "#FF70CE",
          400: "#FE53A5",
          500: "#E03788",
          600: "#E03788",
          700: "#B63279",
          800: "#89366D",
        },

        gray: {
          100: "#858B93",
          200: "#6F7479",
          300: "#51575A",
          400: "#2F3133",
          500: "#111212",
        },
        white: {
          100: "#ffffff",
          200: "#F2F4F7",
          300: "#E8EAED",
          400: "#D3D3D3",
          500: "#B4B4B4",
        },
      },

      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
