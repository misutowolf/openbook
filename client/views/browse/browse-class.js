Template.browseClass.rendered = function() {
	console.log(this.data);
	console.log(this.data.numBooks);
};

Template.browseClass.helpers({

	booksFound: function() {
		return this.data.numBooks > 0;
	},

	theOwner: function() {
		theUser = Meteor.users.findOne({_id: this.owner});
		return theUser.username;
	}

});
