import { createContext, useReducer } from "react";
import { ThemeActions, ThemeReducer } from "../reducers/ThemeReducer";

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const initialTheme = localStorage.getItem("theme") ?? "light";
  const [state, dispatch] = useReducer(ThemeReducer, initialTheme);

  /*   useEffect(() => {
    function loadInitialTheme() {
      const initialTheme = localStorage.getItem("theme") ?? "light";
      setTheme(initialTheme);
    }
    //Cargamos el tema desde localStorage cuando se renderiza por primera vez nuestro provider -> "ThemeProvider"
    loadInitialTheme();
  }, []); */

  /*   useEffect(() => {
    //Función anónima autoejecutada
    // Declaramos la función dentro de los parentesis y posteriormente la invocamos con parentesis.
    (() => {
      const themeSaved = localStorage.getItem("theme");
      if (theme !== themeSaved) {
        localStorage.setItem("theme", theme);
      }
    })();
  }, [theme]);
 */
  return (
    <ThemeContext.Provider
      value={{
        theme: state,
        setTheme: (newTheme) =>
          dispatch({
            type: ThemeActions.UPDATE_THEME,
            payload: newTheme,
          }),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
