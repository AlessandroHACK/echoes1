migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkbs5nz9tmghb72")

  // remove
  collection.schema.removeField("lgdfl0yx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xboyws4",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("bkbs5nz9tmghb72")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lgdfl0yx",
    "name": "name",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("8xboyws4")

  return dao.saveCollection(collection)
})
