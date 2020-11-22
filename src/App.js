import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux";
import MainLayout from "./components/layout/MainLayout";
import Home from "./screens/Home";
import { theme } from "./styles/theme";
import store from "./redux/store";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Home} />
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </ReduxProvider>
  );
}
