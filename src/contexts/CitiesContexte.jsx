import { createContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fecthCities() {
      try {
        setIsLoading(true);
        const citiesInfo = await fetch(`${BASE_URL}/cities`);
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
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
};

export { CitiesProvider };
