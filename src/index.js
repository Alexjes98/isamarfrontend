import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Materials from "routes/materials/index";
import Clothes from "routes/clothes/index";
import Catalog from "routes/catalog/index";
import Orders from "routes/orders/index";
import Login from "routes/login/index";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  let tmpSession = localStorage.getItem("session");
  if (tmpSession) {
    tmpSession = JSON.parse(tmpSession);
  } else {
    tmpSession = null;
  }
  const [session, setSession] = useState(tmpSession);

  if (session) {
    console.log("logged in");
  } else {
    console.log("not logged in");
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        {session ? (
          <Routes>

            <Route path="/materials" element={<Materials session={session} />}></Route>
            <Route path="/clothes" element={<Clothes />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login setSession={setSession} />}></Route>
            <Route path="/materials" element={<Materials />}></Route>
            <Route path="/clothes" element={<Clothes />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
          </Routes>)
        }

      </BrowserRouter>
    </React.StrictMode>
  );
}
console.log("hello");
root.render(
  <App />
);
reportWebVitals();
