module.exports = {
   mode: "jit",
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class",
   theme: {
      fontFamily: {
         display: ["Open Sans", "sans-serif"],
         body: ["Open Sans", "sans-serif"],
      },

      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         "2xl": "1536px",
      },

      extend: {
         backgroundColor: {
            "main-bg": "#FAFBFB",
            "main-dark-bg": "#20232A",
            "secondary-dark-bg": "#33373E",
            "light-gray": "#F7F7F7",
            "light-sidebar": "#F2F2F2",
            "light-sidebar-200": "#E6E6E6",
            "light-green-100": "#DAE6C9",
            "light-green-200": "#B4CD93",
            "light-green-300": "#A1BDAD",
            "light-green-400": "#6A8A81",
            "light-green-500": "#0F4132",
            "white-search": "#f8fafb",
            "org-main": "#FF8C32",
            "org-dark": "#DF7725",
         },
         colors: {
            coco: "#4c4c4c",
            lightGray: "#808080",
            light: "#F2F2F2",
            "gray-dark": "#273444",
            "gray-light": "#d3dce6",
            "gray-light-dash": "#B9B9B9",
            "org-main": "#FF8C32",
            "org-dark": "#DF7725",
            "light-green-100": "#DAE6C9",
            "light-green-200": "#B4CD93",
            "light-green-300": "#A1BDAD",
            "light-green-400": "#6A8A81",
         },
         fontSize: {
            14: "14px",
         },
         spacing: {
            128: "32rem",
            144: "36rem",
         },

         borderWidth: {
            1: "1px",
         },
         borderColor: {
            color: "rgba(0, 0, 0, 0.1)",
         },
         width: {
            400: "400px",
            760: "760px",
            780: "780px",
            800: "800px",
            1000: "1000px",
            1200: "1200px",
            1400: "1400px",
         },
         height: {
            80: "80px",
         },
         minHeight: {
            590: "590px",
         },
      },
   },
   plugins: [],
};
