Template.browseClass.helpers({

	booksFound: function() {
		return this.numBooks > 0;
	},

	theOwner: function() {
		theUser = Meteor.users.findOne({_id: this.owner});
		return theUser.username;
	}

});
