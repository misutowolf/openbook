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
		path: '/dashboard',
		data: function() {
			reqCursor = Requests.find({owner: Meteor.userId()});
			bookCursor = Books.find({owner: Meteor.userId()});
			return {
				theBooks: bookCursor,
				theRequests: reqCursor
			};
		}
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
	this.route('edit-profile', {
		path: '/dashboard/editprofile',
		data: function() { return Meteor.user(); }
	});


	// BROWSE ROUTES (Class only)
	this.route('browse-all', {
		path: '/classes'
	});

	this.route('browseClass', {
		path: '/classes/:_id',
		data: function() {
			var booksCursor = Books.find({"class": this.params._id},{sort:{"createdAt": 1}});
			return {
				theClass: this.params._id,
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
		path: '/profile/:username',
		data: function() { 
			var userCursor = Meteor.users.findOne({username: this.params.username});
			var bookCursor = Books.find({owner: userCursor._id});
			return {
				theUser: userCursor,
				theBooks: bookCursor
			};
		}
	});

});