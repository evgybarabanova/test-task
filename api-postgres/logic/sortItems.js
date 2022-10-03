const { Item } = require('../db/models')

function sortItems(column, order) {
  return (async () => {
    const items = await Item.findAll({
      order: [
        [column, order]
      ]
    })

    return items
  })()
}

module.exports = sortItems;
