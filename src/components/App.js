import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext, themes } from "../context/theme-context";

function App() {
  const [theme, setTheme] = React.useState(themes.light);

  return (
    <ThemeContext.Provider value={theme}>
      <React.Fragment>
        <Header />
        <hr />
        <ToggleTheme />
        <TicketControl />
      </React.Fragment>
    </ThemeContext.Provider>
  );
}

export default App;
