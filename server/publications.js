Meteor.publish('userByUsername', function(username) {
	return Meteor.users.find({
		username: username
	});
});