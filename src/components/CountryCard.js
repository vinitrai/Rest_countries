import { Link } from "react-router-dom";
export default function CountryCard({ country }) {
  return (
    <div className="country--card elements-mode">
      <Link to={`/countries/${country.name.common}`}>
        <div className="country--image">
          <img src={country.flags.svg} alt={`${country.name.common}'s flag`} />
        </div>
        <div className="country--detail">
          <h2>{country.name.common}</h2>
          <p>
            <strong>
              Population: {country.population.toLocaleString("en-US")}
            </strong>
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </Link>
    </div>
  );
}
