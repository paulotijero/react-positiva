const API_SERVICES_CONSUMER =
  "https://challenge-labp.s3.amazonaws.com/services.json";

async function allServices() {
  const list = await fetch(API_SERVICES_CONSUMER, {
    method: "GET"
  }).then(response => response.json());
  return list;
}

export { allServices };
