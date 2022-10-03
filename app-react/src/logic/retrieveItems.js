import axios from "axios";

export default function retrieveItems() {
  return axios.get(`${process.env.REACT_APP_API_URL}/items`, {
  })
  .then(response => {
    const { data: items } = response

    return items
  })
  .catch(error => {
    const message = error.response.data.error

    throw new Error(message)
  })
}

