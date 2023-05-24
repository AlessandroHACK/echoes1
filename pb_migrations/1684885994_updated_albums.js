migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

  // remove
  collection.schema.removeField("qzgzi8yx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hd5y3sg5",
    "name": "release_year",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 2024
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

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

  // remove
  collection.schema.removeField("hd5y3sg5")

  return dao.saveCollection(collection)
})
