import { useState, useEffect } from "react";
import { getModels } from "@/app/api/api";

const ModelsList = ({ makeId, year }) => {
  const [models, setModels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (makeId && year) {
      getModels(makeId, year)
        .then((data) => {
          setModels(data.Results || []);
        })
        .catch((err) => {
          setError("Error fetching data");
        });
    }
  }, [makeId, year]);

  if (error) return <p className="text-center p-4 text-red-500">{error}</p>;

  return (
    <ul className="space-y-2">
      {models.map((model) => (
        <li key={model.Model_ID} className="p-2 bg-white shadow rounded w-[500px]">
          {model.Model_Name}
        </li>
      ))}
    </ul>
  );
};

export default ModelsList;
