Template.bookConfirm.helpers({

	tempBook: function() {
		return Session.get("tempBook");
	},

	listingType: function() {
		return LISTING_TYPES[this.type];
	},

	bookCondition: function() {
		return CONDITIONS[this.condition];
	}

});


Template.bookConfirm.events({

	"click #btn-confirm": function() {

		tempBook = Session.get("tempBook");
		console.log(JSON.stringify(tempBook));
		Meteor.call("bookInsert", tempBook);

	}

});
