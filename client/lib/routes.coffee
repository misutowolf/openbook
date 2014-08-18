# Iron Router configuration!
Router.configure
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
	notFoundTemplate: 'notfound'


# Route mapping!

Router.map ->

	# Default (root)
	@route 'home',
		path: '/'


	### DASHBOARD ROUTES ###

	# Dashboard front page
	@route 'dashboard',
		path: '/dashboard'

	# Add a book
	@route 'dashboard-add',
		path: '/dashboard/add'

	@route 'book-confirm',
		path: '/dashboard/confirm'

	# Delete a book (no recipient)
	@route 'dashboard-delete',
		path: '/dashboard/delete/:_id'
		data: ->
			book: Books.findOne(@params._id)

	# Finalize a book (recipient exists)
	@route 'dashboard-finalize',
		path: '/dashboard/finalize/:_id'
		data: ->
			book: Books.findOne(@params._id)

	# Show conversations with other users (POSSIBLY LATER ON)
	# @route 'dashboard-messages',

	# Edit user profile
	@route 'dashboard-profile',
		path: '/dashboard/profile'
		data: ->
			Meteor.user()



	### BROWSE ROUTES (Class only) ###
	@route 'browse-all',
		path: '/browse'

	@route 'browse-class',
		path: '/browse/:class'
		data: ->
			class: @params.class
			numBooks: Books.find({"class": @params.class},{sort:{"createdAt": 1}}).count()
			books: Books.find({"class": @params.class},{sort:{"createdAt": 1}})


	### INDIVIDUAL BOOK ###
	@route 'book',
		path: '/book/:_id'
		data: ->
			book: Books.findOne(@params._id)



	### PROFILE VIEW ###
	@route 'profile',
		path: '/profile/:_username'
		data: ->
			Meteor.users.find({username: @params._username})
