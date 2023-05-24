migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkbs5nz9tmghb72")

  // update
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
      "displayFields": [
        "slug",
        "image",
        "length",
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkbs5nz9tmghb72")

  // update
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
      "displayFields": [
        "slug",
        "image",
        "length",
        "release_date",
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
