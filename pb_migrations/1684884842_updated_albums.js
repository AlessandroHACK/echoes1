migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

  // remove
  collection.schema.removeField("xrj4b3g7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zebegmjt",
    "name": "genre",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "he8vvycvz023ua9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfrdmknd",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xrj4b3g7",
    "name": "genre",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Pop",
        "Rap"
      ]
    }
  }))

  // remove
  collection.schema.removeField("zebegmjt")

  // remove
  collection.schema.removeField("qfrdmknd")

  return dao.saveCollection(collection)
})
