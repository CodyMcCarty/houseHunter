import INFO from "./Constants";

const API = {
    fetchHouses: fetch(INFO.housesEP) // async () => (await fetch(INFO.housesEP))
        .then((response) => {
            return response.json();
        })
};

export default API;