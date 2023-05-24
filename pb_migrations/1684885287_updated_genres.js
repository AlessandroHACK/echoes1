migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("he8vvycvz023ua9")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_4C61n93` ON `genres` (`type`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("he8vvycvz023ua9")

  collection.indexes = [
    "CREATE INDEX `idx_4C61n93` ON `genres` (`type`)"
  ]

  return dao.saveCollection(collection)
})
