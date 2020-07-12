import axios from "axios";

const getCountries = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://countries.free.beeceptor.com/countries")
      .then(resolve)
      .catch(reject);
  });
};

export { getCountries };
