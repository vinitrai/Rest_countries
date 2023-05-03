export default function SingleDetail({ country, handleUrlChange }) {
  return (
    <>
      <div className="single--image">
        <img src={country.flags.png} alt={`${country.name.common}'s flag`} />
      </div>
      <div className="country--info">
        <div className="country--text">
          <h2>
            <strong>Name:</strong> {country.name?.common}
          </h2>

          <p>
            <strong>Population:</strong>
            {country.population.toLocaleString("en-US")}
          </p>
          <p>
            <strong>Region:</strong>
            {country.region}
          </p>
          <p>
            <strong>Sub Region:</strong>
            {country.subregion}
          </p>

          <p>
            <strong>Capital:</strong> {country.capital}
          </p>

          <p>
            <strong>TLD:</strong>
            {country.tld}
          </p>
          <p>
            <strong>Currencies:</strong>{" "}
            {Object.keys(country.currencies)
              .map((key) => country.currencies[key].name)
              .join(", ")}
          </p>

          <p>
            <strong>Languages:</strong>{" "}
            {Object.values(country.languages).join(", ")}
          </p>
        </div>

        <div className="country--borders">
          {country.borders?.map((border) => (
            <button
              key={border}
              onClick={() =>
                handleUrlChange(
                  `https://restcountries.com/v3.1/alpha/${border}`
                )
              }
            >
              {border}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
