# Meteor code (Helpers/events)

Template.dashboardAdd.rendered = ->
	$('.traderequest').toggle false



Template.dashboardAdd.helpers

	prefixDropdown: ->
		Prefixes.find()

	amazonResponse: ->
		BookSearches.findOne({isbn: Session.get "isbn"},{sort: {"createdAt": -1}})

	bookTitle: ->
		BookTitles.findOne({isbn: Session.get "isbn"},{sort: {"createdAt": -1}})



Template.dashboardAdd.events

	'click #isbn-btn': ->

		theISBN = $("#isbn").val().trim()
		theISBN = theISBN.replace(/-/g,"")
		Session.set "isbn", theISBN

		Meteor.call 'isbnLookup', theISBN, (err, res) ->
			if err
				console.log err.reason
			else
				console.log 'success'

	'click #trade-isbn-btn': ->

		theISBN = $("#trade-isbn").val().trim()
		theISBN = theISBN.replace(/-/g,"")
		Session.set "isbn", theISBN

		Meteor.call 'isbnLookup', theISBN, (err, res) ->
			if err
				console.log err.reason
			else
				console.log 'success'

	'change input.type': (evt) ->

		showToggle = parseInt(evt.currentTarget.value, 10)
		showHide = (showToggle is 2) ? true : false
		$('.traderequest').toggle showHide

	'submit form': (e, template) ->

		# Prevent default action
		e.preventDefault()

		# Gather data from form
		theType = $("input[name=type]").val().trim()
		theISBN = $("#isbn").val().trim().replace(/-/g, "")
		theTitle = $("#title").val().trim()
		thePrefix = $("#prefix").val().trim()
		theNumber = $("#number").val().trim()
		theCondition = $("#condition").val().trim()
		theTradeISBN = $("#trade-isbn")?.val().trim()
		theTradeTitle = $("#trade-title")?.val().trim()


		book =
			owner: Meteor.user()._id
			isbn: theISBN
			title: theTitle
			type: theType
			class: thePrefix + theNumber
			condition: theCondition
			active: false
			createdAt: new Date

		if (theTradeISBN && theTradeTitle)
			book.tradeFor =
				isbn: theTradeISBN
				title: theTradeTitle

		console.log JSON.stringify(book)

		# Set session stuff, go to confirmation page
		Session.set("tempBook", book)
		Router.go('book-confirm')
