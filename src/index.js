import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme, ChakraProvider, CSSReset } from "@chakra-ui/react";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={newTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// function App() {
//   return (
//     <ChakraProvider theme={newTheme}>
//       <CSSReset />
//       <Header />
//       <App />
//     </ChakraProvider>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
