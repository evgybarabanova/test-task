const { Item } = require('../db/models')

function paginateItems(page, size) {
  return (async () => {

    const items = await Item.findAndCountAll({
      limit: size,
      offset: page * size
    })
    return items
  })()
}

module.exports = paginateItems;
