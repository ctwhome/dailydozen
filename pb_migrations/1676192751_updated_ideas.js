migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nyd8kn0yereta2h")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nyd8kn0yereta2h")

  collection.createRule = null

  return dao.saveCollection(collection)
})
