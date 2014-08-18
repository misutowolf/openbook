# Confgure Accounts-UI

Meteor.startup ->

	Accounts.ui.config
		passwordSignupFields: 'USERNAME_ONLY'

	AccountsEntry.config
		homeRoute: '/',
		dashboardRoute: '/dashboard'
		profileRoute: '/profile'
		passwordSignupFields: 'USERNAME_ONLY'
		extraSignUpFields: [
			field: 'email'
			label: 'E-mail Address'
			placeholder: 'email@mymail.shawnee.edu'
			type: 'email'
			required: true
		]
