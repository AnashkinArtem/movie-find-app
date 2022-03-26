import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import PrivacyPolicy from "./routes/privacypolicy";

import './styles.scss'

const rootElement = document.getElementById("root");

render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    rootElement
    
);