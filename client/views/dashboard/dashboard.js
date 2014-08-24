Template.dashboard.helpers({

	haveBooks: function() {
		bookCursor = Books.find({owner: Meteor.userId()});
		return bookCursor.count() > 0;
	},

	haveRequests: function() {
		reqCursor = Requests.find({owner: Meteor.userId()});
		return reqCursor.count() > 0;
	},

	theCondition: function() {
		return CONDITIONS[this.condition];
	},

	theType: function() {
		return INTENTIONS[this.condition];
	},

	bookRequests: function() {
		reqCursor = Requests.find({book: this._id});
		return reqCursor.count() > 0;
	}

});