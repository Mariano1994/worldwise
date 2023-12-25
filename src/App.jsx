import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import { PageNotFound } from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";
import { Login } from "./pages/Login";
import { CityList } from "./components/CityList/CityList";
import { CountriesList } from "./components/CountriesList/CountriesList";
import City from "./components/City/City";
import Form from "./components/Form/Form";

// const BASE_URL = "http://localhost:9000";

export function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fecthCities() {
      try {
        setIsLoading(true);
        const citiesInfo = await fetch("http://localhost:9000/cities");
        const citiesData = await citiesInfo.json();
        setCities(citiesData);
      } catch {
        alert("There was an error loading the data");
      } finally {
        setIsLoading(false);
      }
    }
    fecthCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountriesList isLoading={isLoading} cities={cities} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
