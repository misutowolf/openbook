Meteor.startup(function() {

	// Configure Accounts-UI
	Accounts.ui.config({
		passwordSignupFields: 'USERNAME_ONLY'
	});

	// Configure Accounts-Entry
	AccountsEntry.config({
		homeRoute: '/',
		dashboardRoute: '/dashboard',
		profileRoute: '/profile',
		passwordSignupFields: 'USERNAME_ONLY',
		extraSignUpFields: [{
			field: 'email',
			label: 'E-mail Address',
			placeholder: 'email@mymail.shawnee.edu',
			type: 'email',
			required: true
		}]
	});
});