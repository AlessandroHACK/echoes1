migrate((db) => {
  const collection = new Collection({
    "id": "54j6t07nvidohek",
    "created": "2023-05-23 23:29:47.129Z",
    "updated": "2023-05-23 23:29:47.129Z",
    "name": "albums",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vbu5cywn",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5wbnny64",
        "name": "quantity",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ptuvzd6e",
        "name": "artist",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "bkbs5nz9tmghb72",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "wodozh1m",
        "name": "length",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("54j6t07nvidohek");

  return dao.deleteCollection(collection);
})
