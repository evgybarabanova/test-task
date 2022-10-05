import axios from "axios";

export default function paginateItems(size, page) {
  return axios.get(`${process.env.REACT_APP_API_URL}/paginate`, {
    size, page
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

