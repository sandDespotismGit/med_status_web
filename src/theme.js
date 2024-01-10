import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  //варианты для различных компонентов
  fonts: {
    body: "Roboto-mono",
  },
  components: {
    Text: {
      variants: {
        side_menu_hover: {
          color: "menu_gray",
          _hover: {
            color: "main_yellow",
          },
        },
        benefits_green: {
          padding: "15px",
          color: "#085D65",
          borderRadius: "13px",
          border: "1px solid transparent",
          textShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
          fontSize: ["14px", "14px", "14px", "15px", "16px"],
          fontWeight: "700",
          width: "100%",
          _hover: {
            borderRadius: "13px",
            border: "1px solid #0F939F",
          },
        },
      },
    },
    Link:{
      variants: {
        menu_green_link: {
          fontSize:'10px'
        }
      }
    },
    Button: {
      variants: {
        menu_yellow: {
          border: "2px solid",
          borderColor: "main_yellow",
          borderRadius: "0",
          background: "transparent",
          width: "100%",
          _hover: {
            backgroundColor: "main_yellow",
          },
        },
        menu_red: {
          border: "2px solid",
          borderColor: "main_red",
          borderRadius: "0",
          background: "transparent",
          _hover: {
            backgroundColor: "main_red",
          },
        },
      },
    },
  },
  colors: {
    menu_gray: "#CCC3C2",
    main_dark: "#333",
    light_dark: "#666",
    main_yellow: "#FFBF00",
    main_red: "#FF0F00",
    menu_white: "#F8F8F8",
    date_gray: "#A9A9A9",
  },
});

export default theme;
