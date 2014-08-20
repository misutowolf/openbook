Meteor.call("classCount", function(err, result) {
		Session.set("classCount", result);
});

Template.browseAll.helpers({

	aggCount: function() { return Session.get("classCount");}

});