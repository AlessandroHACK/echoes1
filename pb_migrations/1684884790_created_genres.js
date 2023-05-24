migrate((db) => {
  const collection = new Collection({
    "id": "he8vvycvz023ua9",
    "created": "2023-05-23 23:33:10.807Z",
    "updated": "2023-05-23 23:33:10.807Z",
    "name": "genres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "irdmiavc",
        "name": "type",
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
        "id": "ysskx74g",
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
  const collection = dao.findCollectionByNameOrId("he8vvycvz023ua9");

  return dao.deleteCollection(collection);
})
