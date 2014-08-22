Template.book.helpers({

	availability: function() {
		return this.active ? "yes" : "no";
	},

	theOwner: function() {
		theUser = Meteor.users.findOne({_id: this.owner});
		return theUser.username;
	},

	theCondition: function() {
		return CONDITIONS[this.condition];
	},

	theType: function() {
		return INTENTIONS[this.condition];
	}

});