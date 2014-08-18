Template.browseClass.helpers

	booksFound: ->
		@numBooks > 0

	theOwner: ->
		theUser = Meteor.users.findOne({_id: @owner})
		theUser.username
