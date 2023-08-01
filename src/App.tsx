import "./app.scss";
import "react-toastify/dist/ReactToastify.css";
import { Menu } from "./menu";
import { Home } from "./home";
import { Route, Routes } from "react-router-dom";
import { Questions } from "./questions";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./theme";
import { QuestionsProvider } from "./questions/QuestionsContext";

export function App() {
  return (
    <>
      <ThemeProvider>
        <QuestionsProvider>
          <div className="app-wrapper">
            <div className="menu-wrapper">
              <Menu />
              <ToastContainer autoClose={5000} theme="dark" />
            </div>
            <div className="content-wrapper">
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="questions">
                    <Route index element={<Questions />} />
                  </Route>
                </Route>
              </Routes>
            </div>
          </div>
        </QuestionsProvider>
      </ThemeProvider>
    </>
  );
}
