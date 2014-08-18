Template.bookBrowse.helpers

	theOwner: ->

		theUser = Meteor.users.findOne({_id: @owner})
		theUser.username
