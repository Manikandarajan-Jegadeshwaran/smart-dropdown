import axios from "axios";

const getCountries = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://demo4556897.mockable.io/countries")
      .then(resolve)
      .catch(reject);
  });
};

export { getCountries };
