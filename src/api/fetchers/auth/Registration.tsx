import { fetchConstants, registrationConstants } from "../../../constants/Auth"

async function registration(payload: object) {
    const settings = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "mode": 'cors'
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(
      `${fetchConstants.HOST}/${registrationConstants.ROUTE}`,
      settings
    );
    const registrationRes = await response.json();
    return registrationRes;
  }


  const registrationApi = {
    registration: registration
  }
  
  export default registrationApi