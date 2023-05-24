migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

  // remove
  collection.schema.removeField("ghpfs5bi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qzgzi8yx",
    "name": "release_year",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ghpfs5bi",
    "name": "release_date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("qzgzi8yx")

  return dao.saveCollection(collection)
})
