import axios from "axios";

export default function findItems(filter, sort, paginate) {
  const params = {}

  if (filter != null && filter.column != null && filter.condition != null && filter.value != null) {
    params.filterColumn = filter.column
    params.filterCondition = filter.condition
    params.filterValue = filter.value
  }

  if (sort != null && sort.column != null && sort.order != null ) {
    params.sortColumn = sort.column
    params.sortOrder = sort.order
  }

  if (paginate != null && paginate.page != null && paginate.size != null ) {
    params.paginatePage = paginate.page
    params.paginateSize = paginate.size
  }


  return axios.get(`${process.env.REACT_APP_API_URL}/items/find`, {
    params
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
