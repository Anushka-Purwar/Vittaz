export const tokens = {
    // different hues of color
    blue:{
     0: "#e9f0f5",
     5: "#bbe0fa",
     100: "#91caf2",
     200: "#68b3e8",
     300: "#399ce3",
     400: "#1689db",
     500: "#0675c4",
     600: "#055d9c",
     700: "#044b7a",
     800: "#02395c",
     900: "#01283d",
     1000: "#001621",
    },
    purple:{
      m: "#984a9c",
    0: "#f2e9ed",
    5: "#ebcee0",
    100: "#e3afd5",
    200: "#d48fc8",
    300: "#c475bd",
    400: "#b35eb1",
    500: "#984a9c",
    600: "#7c3982",
    700: "#662c6e",
    800: "#4d2054",
    900: "#35163b",
    },
    celadon:{
     100: "#66deb9",
     200: "#31cc9f",
     300: "#09b585",
     400: "#009e73",
     500: "#008763",
     600: "#007053",
     700: "#005c44",
     800: "#004533",
     900: "#003024",
     1000: "#001c15",

    },
    grey: {
      
      100: "#f0f0f3",
      200: "#e1e2e7",
      300: "#d1d3da",
      400: "#c2c5ce",
      500: "#b3b6c2",
      600: "#8f929b",
      700: "#6b6d74",
      800: "#48494e",
      900: "#242427",
    },
    primary: {
      // light green
      100: "#d0fcf4",
      200: "#a0f9e9",
      300: "#71f5de",
      400: "#41f2d3",
      500: "#12efc8",
      600: "#0ebfa0",
      700: "#0b8f78",
      800: "#076050",
      900: "#043028",
    },
    secondary: {
      // yellow
      100: "#fcf0dd",
      200: "#fae1bb",
      300: "#f7d299",
      400: "#f5c377",
      500: "#f2b455",
      600: "#c29044",
      700: "#916c33",
      800: "#614822",
      900: "#302411",
    },
    orange:{
      m: "#b26200",
      0: "#f5ece6",
      5: "#f7dcc6",
    100: "#ffbf86",
    200: "#faa754",
    300: "#e68b28",
    400: "#d67709",
    500: "#b26200",
    600: "#8a4d00",
    700: "#704000",
    800: "#543100",
    900: "#361f00",
    1000: "#1f1200",
    },
    tertiary: {
      // purple
      500: "#8884d8",
    },
    background: {
      light: "#2d2d34",
      main: "#1f2026",
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.purple,
        main: tokens.purple[300],
        light: tokens.purple[500],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
      },
      tertiary: {
        ...tokens.celadon,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[700],
      },
    },
  }; 