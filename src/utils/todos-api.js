import Axios from 'axios';

export default async function postLogin(params) {
    try {
      const response = await Axios.post(params.url,{
        email : params.email,
        password : params.password
      });
      if(response){
          return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }