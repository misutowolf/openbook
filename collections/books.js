Books = new Meteor.Collection('books');

// Collection helpers!  Woohoo!
Books.helpers({

	getDate: function() {
		theDate = moment(this.createdAt);
		return theDate.format("MM/DD/YYYY");
	},

	getTimestamp: function() {
		theDate = moment(this.createdAt);
		return theDate.format("MM/DD/YYYY, HH:mm:ss");
	}

});
