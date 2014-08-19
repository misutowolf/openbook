Template.browseAll.helpers

	classList: ->

		db = MongoInternals.defaultRemoteCollectionDriver().db
		col = db.collection('Books')
		aggregateSync = Meteor._wrapAsync(col.aggregate.bind(col))
		pipeline = [{},{$group: {_id: '$class', count:{$sum: 1}}},{ $sort : { class : 1 } }]
		theList = aggregateSync(pipeline)
		console.log theList