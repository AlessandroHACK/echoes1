migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkbs5nz9tmghb72")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jex6uudr",
    "name": "albums",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "54j6t07nvidohek",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkbs5nz9tmghb72")

  // remove
  collection.schema.removeField("jex6uudr")

  return dao.saveCollection(collection)
})
