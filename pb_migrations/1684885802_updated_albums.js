migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezyfewwk",
    "name": "slug",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

  // remove
  collection.schema.removeField("ezyfewwk")

  return dao.saveCollection(collection)
})
