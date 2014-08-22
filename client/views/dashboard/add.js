// Hide the "trade" section by default when page is rendered.
Template.dashboardAdd.rendered = function() {
	$(".traderequest").toggle(false);
}

// Helpers!
Template.dashboardAdd.helpers({

	// Generated from Prefixes (fixture) for form use.
	prefixDropdown: function() {
		return Prefixes.find();
	},

	// Helper containing data from AWS (or cache)
	amazonResponse: function() {
		return BookSearches.findOne({isbn: Session.get("isbn")},{sort: {"createdAt": -1}});
	},

	// Book title for form (from Amazon)
	bookTitle: function() {
		return BookTitles.findOne({isbn: Session.get("isbn")},{sort: {"createdAt": -1}});
	}

});

// Event handling
Template.dashboardAdd.events({

	// Check ISBN button for main form section (top)
	"click #isbn-btn": function() {

		// Set the ISBN# in the Session variable (important!)
		theISBN = $("#isbn").val().trim().replace(/-/g, "");
		Session.set("isbn", theISBN);

		// Make call to Meteor.method for AJAX stuff.
		Meteor.call("isbnLookup", theISBN, function(err, res) {
			if (err) {
				console.log("Error: " + err.reason);
			}
			else {
				console.log("Success!");
			}
		});

	},

	// Check ISBN button for optional "trade" form section (bottom)
	"click #trade-isbn-btn": function() {

		// Set the ISBN# in the Session variable (important!)
		theISBN = $("#trade-isbn").val().trim().replace(/-/g, "");
		Session.set("isbn", theISBN);

		// Make call to Meteor.method for AJAX stuff.
		Meteor.call("isbnLookup", theISBN, function(err, res) {
			if (err) {
				console.log("Error: " + err.reason);
			}
			else {
				console.log("Success!");
			}
		});

	},

	// Toggle "trade" based on "type" radio button
	"change input.type": function(e) {
		showHide = (parseInt(e.currentTarget.value, 10) == 2) ? true : false;
		$(".traderequest").toggle(showHide);
	},

	// Submit form, send to Session var and confirmation page
	"submit form": function(e, template) {

		// Prevent default form submission behavior
		e.preventDefault();

		// Gather data from form
		theType = $("input[name=type]").val().trim();
		theISBN = $("#isbn").val().trim().replace(/-/g, "");
		theTitle = $("#title").val().trim();
		thePrefix = $("#prefix").val().trim();
		theNumber = $("#number").val().trim();
		theCondition = $("#condition").val().trim();
		theTradeISBN = $("#trade-isbn").val().trim();
		theTradeTitle = $("#trade-title").val().trim();

		// Construct object using above data
		book = {
			owner: Meteor.userId(),
			isbn: theISBN,
			title: theTitle,
			type: theType,
			class: thePrefix + theNumber,
			condition: theCondition,
			active: true,
			createdAt: new Date()
		};

		if (theTradeISBN && theTradeTitle) {
			book.tradeFor = {
				isbn: theTradeISBN,
				title: theTradeTitle
			};
		}

		// DEBUG - Dump object into server-side console
		console.log(JSON.stringify(book));

		// Place temporary book into Session, and redirect to confirmation
		Session.set("tempBook", book);
		Router.go("book-confirm");
	}

});