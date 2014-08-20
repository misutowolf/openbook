// Iron Router configuration!
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notfound'
});


// Route mapping!

Router.map(function() {


	// Default (root)
	this.route('home', {
		path: '/'
	});

	// DASHBOARD ROUTES

	// Dashboard front page
	this.route('dashboard', {
		path: '/dashboard'
	});

	// Add a book
	this.route('dashboard-add', {
		path: '/dashboard/add'
	});

	this.route('book-confirm', {
		path: '/dashboard/confirm'
	});

	// Delete a book (no recipient)
	this.route('dashboard-delete', {
		path: '/dashboard/delete/:_id',
		data: function() { return Books.findOne(this.params._id); }
	});

	// Finalize a book (recipient exists)
	this.route('dashboard-finalize', {
		path: '/dashboard/finalize/:_id',
		data: function() { return  Books.findOne(this.params._id); }
	});

	// Show conversations with other users (POSSIBLY LATER ON)
	// this.route('dashboard-messages',

	// Edit user profile
	this.route('dashboard-profile', {
		path: '/dashboard/profile',
		data: function() { return Meteor.user(); }
	});


	// BROWSE ROUTES (Class only)
	this.route('browse-all', {
		path: '/browse'
	});

	this.route('browseClass', {
		path: '/browse/:class',
		data: function() {
			var booksCursor = Books.find({"class": this.params.class},{sort:{"createdAt": 1}});
			return {
				theClass: this.params.class,
				numBooks: booksCursor.count(),
				books: booksCursor
			};
		}
	});


	// INDIVIDUAL BOOK
	this.route('book', {
		path: '/book/:_id',
		data: function() { return Books.findOne(this.params._id); }
	});

	// PROFILE VIEW
	this.route('profile', {
		path: '/profile/:_username',
		data: function() { return Meteor.users.find({username: this.params._username}); }
	})

});