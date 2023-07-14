import { fetchConstants, loginConstants } from "../../../constants/Auth"

async function login(payload: object) {
    const settings = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "mode": 'cors'
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(
      `${fetchConstants.HOST}/${loginConstants.ROUTE}`,
      settings
    );
    const loginRes = await response.json();
    return loginRes;
  }


  const loginApi = {
    login: login
  }
  
  export default loginApi