migrate((db) => {
  const collection = new Collection({
    "id": "nyd8kn0yereta2h",
    "created": "2023-02-12 08:49:13.405Z",
    "updated": "2023-02-12 08:49:13.405Z",
    "name": "ideas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x6qd84k7",
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
        "id": "7yqfojuz",
        "name": "file",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("nyd8kn0yereta2h");

  return dao.deleteCollection(collection);
})
