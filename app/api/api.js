export const baseUrl ="https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const getVehicle = async () => {
  const response = await fetch(baseUrl);
  return response.json();
};

export const getModels = async (makeId, year) => {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  return response.json();
};
