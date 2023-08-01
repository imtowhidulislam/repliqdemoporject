/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: {
      colors : {
        // primary : "#0f51f7",
        primary : "#2b57c5",
        // accent : "#1aab7f",
        accent : "#0B7D5B",
        baseClr1 : "#f0f2f7",
        denger: "#f05959",
        nutral1 : "#ba9e9f",
        nutral2 : "#332c23",
        nutral3 : "#ffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-image": "url('https://unsplash.it/1000/1000?image=789')",
      },
      minHeight: {
        "custom-min-h": "500px",
        "custom-h-form": "600px",
      },
      minWidth : {
        'custome-w' : "400px",
      },
      gridTemplateColumns: {
        footerLayout: "repeat(auto-fit, minmax(14rem, 1fr))",
        productLayout: "repeat(auto-fit,minmax(16rem, 1fr))",
        productLayoutTop: "repeat(auto-fit,minmax(13rem, 1fr))",
        productLayoutForMobileLayout: "repeat(auto-fil,minmax(200px, 1fr))",
        collectionLayout: "repeat(auto-fit, minmax(12rem, 1fr))",
        homepageLayoutHero: "repeat(auto-fit, minmax(22rem, 1fr))",
        homepageLayoutHero1: "repeat(auto-fit, minmax(18rem, 1fr))",
        userLayout: "repeat(auto-fit, minmax(5rem, 1fr))",
      },
      fontSize: {
        extraSmall: "8px",
        small: "10px",
      },
      animation: {
        bounce: "bounce 2s ease-in-out infinite forwards",
        moveUp: "moveUp .5s ease-in-out 1 forwards",
        moveInLeft: "moveInLeft .5s ease-in-out 1 forwards",
        moveInRight: "moveInRight .5s ease-in-out 1 forwards",
        cartAnimate: "cartAnimate 1s ease-in-out infinite forwards",
        cartDeleteBtnAnimate: "cartDeleteBtnAnimate .4s ease-in-out 1 forwards",
        mobileNavIn : "mobileNavIn .5s ease-in-out 1 frowards",  
        mobileNavOut : "mobileNavOut .5s ease-in-out 1 frowards"  
      },
      keyframes: {
        bounce: {
          "0%": { transform: "translateY(-5px)", color: "#0f51f7" },
          "50%": { transform: "rotate(0deg)", color: "#1aab7f" },
          "100%": { transform: "translateY(0px)", color: "#0f51f7" },
        },
        moveUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        moveInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        moveInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        cartAnimate: {
          "0%": { transform: "translateX(0%)", opacity: 1 },
          "50%": {
            transform: "translateX(50%)",
            opacity: 1,
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: 1,
            color: "#1aab7f",
          },
        },
        cartDeleteBtnAnimate: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        mobileNavIn : {
          "0%" : {transform: "translateX(0%)" , opacity: 0},
          "100%" : {transform: "translateX(-100%)" , opacity: 1},
        },
        mobileNavOut : {
          "0%" : {inset : "0% 0% 0% 30%" , opacity: 1},
          "100%" : {inset : "0% 0% 0% 100%" , opacity : 0}
        }
      },
    },
  },
  plugins: [],
};
