import axios from "axios";

const getCountries = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://run.mocky.io/v3/fb01583b-16dc-4d2a-abc8-fc2559015e1a")
      .then(resolve)
      .catch(reject);
  });
};

export { getCountries };
