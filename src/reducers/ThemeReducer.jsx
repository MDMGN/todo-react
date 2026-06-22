const ThemeActions = {
  GET_THEME: "GET_THEME",
  UPDATE_THEME: "UPDATE_THEME",
};

function ThemeReducer(state, action) {
  switch (action.type) {
    case ThemeActions.GET_THEME:
      return state;
    case ThemeActions.UPDATE_THEME: {
      const updatedTheme = action.payload === "dark" ? "dark" : "light";
      localStorage.setItem("theme", updatedTheme);
      return updatedTheme;
    }
    default:
      return state;
  }
}

export { ThemeActions, ThemeReducer };
