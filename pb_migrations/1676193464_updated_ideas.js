migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nyd8kn0yereta2h")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nyd8kn0yereta2h")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
