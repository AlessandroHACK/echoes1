migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
