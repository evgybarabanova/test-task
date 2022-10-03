import axios from "axios";

export default function findItems(query) {
   return axios.get(`${process.env.REACT_APP_API_URL}/items/find`, {
    //  params:{
    //   query
    //   }
    }) 
     .then(response => {
       const { data: items } = response
debugger
       return items
     })
     .catch(error => {
       const message = error.response.data.error

       throw new Error(message)
     })
}
