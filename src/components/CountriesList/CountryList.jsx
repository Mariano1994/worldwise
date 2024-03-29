import CountryItem from "../CountryItem/CountryItem";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import styles from "./CountryList.module.css";
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message='"Add your first city by cllicking on a city on the map"' />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <>
      <ul className={styles.countryList}>
        {countries.map((country) => {
          return <CountryItem country={country} key={country.country} />;
        })}
      </ul>
    </>
  );
}

export default CountryList;
