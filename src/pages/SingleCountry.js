import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SingleDetail from "../components/SingleDetail";
import { useState } from "react";
export default function SingleCountry() {
  const { cname } = useParams();
  const [url, setUrl] = useState(
    `https://restcountries.com/v3.1/name/${cname}`
  );

  const navigate = useNavigate();

  const { data, isPending, error } = useFetch(url);

  function handleUrlChange(newUrl) {
    setUrl(newUrl);
  }

  return (
    <section
      className="container country--container"
      style={{ paddingTop: "2em" }}
    >
      <button className="back--btn" onClick={() => navigate("/")}>
        Back
      </button>
      <div className="country--description">
        {data && data.length > 0 && (
          <SingleDetail country={data[0]} handleUrlChange={handleUrlChange} />
        )}

        {error && <p>{error}</p>}
        {isPending && <p>Loading.....</p>}
      </div>
    </section>
  );
}
