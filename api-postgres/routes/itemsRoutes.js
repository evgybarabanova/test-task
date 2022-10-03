const router = require('express').Router()
const { retrieveItems, filterItems, sortItems, findItems, paginateItems } = require('../logic')

router.get('/', async (req, res) => {
  try {
    const items = await retrieveItems()

    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/sort', async (req, res) => {
  try {
    const { query: { column, order } } = req

    const items = await sortItems(column, order)

    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/filter', async (req, res) => {
  try {
    const { query: { column, condition, value } } = req

    const items = await filterItems(column, condition, value)

    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/find', async (req, res) => {
  try {
    const { query: { filterColumn, filterCondition, filterValue, sortColumn, sortOrder, paginatePage, paginateSize } } = req

    const filter = {
      column: filterColumn,
      condition: filterCondition,
      value: filterValue
    }

    const sort = {
      column: sortColumn,
      order: sortOrder
    }

    const paginate = {
      limit: paginateSize,
      offset: paginatePage * paginateSize
    }

    const items = await findItems(filter, sort, paginate)

    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/paginate', async (req, res) => {
  try {
    const { query: { page, size } } = req

    const items = await paginateItems(page, size)

    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
