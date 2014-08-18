Template.bookConfirm.helpers

	tempBook: ->
		Session.get("tempBook")

	listingType: ->
		LISTING_TYPES[@type]

	bookCondition: ->
		CONDITIONS[@condition]



Template.bookConfirm.events

	'click #btn-confirm': ->

		tempBook = Session.get("tempBook")
		console.log JSON.stringify(tempBook)
		Meteor.call("book-insert", tempBook)
