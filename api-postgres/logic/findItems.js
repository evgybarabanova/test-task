const { Item } = require('../db/models')
const { Op } = require("sequelize")

function findItems(filter, sort, paginate) {
  const criteria = {}

  if (filter) {
    let cond

    if (filter.condition === 'equal-to')
      cond = Op.eq
    else if (filter.condition === "greater-than")
      cond = Op.gt
    else if (filter.condition === "lower-than")
      cond = Op.lt

    criteria.where = {
      [filter.column]: {
        [cond]: filter.value
      }
    }
  }

  if (sort) {
    criteria.order = [
      [sort.column, sort.order]
    ]
  }

  if (paginate) {
    criteria.limit = paginate.limit,
    criteria.offset = paginate.offset
  }

  return (async () => {
    const itemsAndCount = await Item.findAndCountAll(criteria)
    return itemsAndCount
  })()
}


module.exports = findItems;
