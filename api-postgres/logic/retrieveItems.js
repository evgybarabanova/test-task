const { Item } = require('../db/models')

function retrieveItems() {

  return (async () => {
    let items = await Item.findAll({})

    items = items.map((item) => ({
      date: item.date,
      name: item.name,
      count: item.count,
      distance: item.distance
    }))
    return items
  })()
}

module.exports = retrieveItems;
