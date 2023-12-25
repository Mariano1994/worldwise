import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";

export function Map() {
  const navigate = useNavigate();
  const [searchParams, setSerachParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <>
      <div className={styles.mapContainer} onClick={() => navigate("form")}>
        <h1>Map</h1>
        <h2>
          Position: {lat}, {lng}
        </h2>
      </div>
    </>
  );
}
