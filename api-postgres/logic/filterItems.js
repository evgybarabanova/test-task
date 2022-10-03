const { Item } = require('../db/models')
const { Op } = require("sequelize")

function filterItems(column, condition, value) {
  let cond

  if (condition === 'equal-to')
    cond = Op.eq
  else if (condition === "greater-than")
    cond = Op.gt
  else if (condition === "lower-than")
    cond = Op.lt

  return (async () => {
    const items = await Item.findAll({
      where: {
        [column]: {
          [cond]: value
        }
      }
    })
    return items
  })()
}

module.exports = filterItems;
