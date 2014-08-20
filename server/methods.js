// Get APAC ready to go?
util = Meteor.require('util');
OperationHelper = Meteor.require('apac').OperationHelper;

// METHODS
Meteor.startup(function() {

	Meteor.methods({

		// Use AWS to look up ISBN numbers
		isbnLookup: function(isbn) {

			// Strip dashes from ISBN, AWS can't use them
			isbn = isbn.replace(/-/g,"");

			// Consult cached results
			cachedResult = BookSearches.findOne({"isbn": isbn},{sort:{"createdAt": -1}});

			if (!cachedResult) { // Result isn't cached, fetch from Amazon.

				// Prepare APAC OpHelper
				opHelper = new OperationHelper({
					awsId: AWS_KEY_ID,
					awsSecret: AWS_SECRET_KEY,
					assocId: AWS_ASSOC_ID
				});

				// Execute query, bind to env for async Meteor stuff.
				opHelper.execute('ItemLookup', {
					SearchIndex: 'Books',
					ResponseGroup: 'Medium,Images',
					IdType: 'ISBN',
					ItemId: isbn
				}, Meteor.bindEnvironment(function(res) { 

					// Callback for APAC execution, using bE for Meteor stuff.
					temp = JSON.stringify(res);
					console.log(temp)
					temp = temp.replace(/"\$":/g, "\"tempKey\":");
					
					// Parse response and make it usable via parse()
					result = JSON.parse(temp)

					// Get image from response
					resultImg = result.ItemLookupResponse.Items[0].Item[0].MediumImage[0].URL[0];

					// Reach into response for ease of code writing
					resultAttribs = result.ItemLookupResponse.Items[0].Item[0].ItemAttributes[0];

					// Build a search response document from our APAC response!
					theSearch = {
						"isbn": isbn,
						"author": resultAttribs.Author[0],
    					"title": resultAttribs.Title[0],
    					"pages": resultAttribs.NumberOfPages[0],
    					"img": resultImg,
    					"publisher": resultAttribs.Publisher[0],
    					"pubdate": resultAttribs.PublicationDate[0],
    					"amazonLink": result.ItemLookupResponse.Items[0].Item[0].DetailPageURL[0],
    					"createdAt": new Date(),
    					"active": true
					}

					// Insert this document into the MongoDB Collection
					BookSearches.insert(theSearch);

					// Tell the console we used AWS for diagnostics
					return console.log("Using AWS result for ISBN: " + isbn);

				}));

			} else { // Result is in cache!  Use that instead.
				console.log("Using cached result for ISBN: " + isbn);
			}

		},

		bookInsert: function(book) {

			// Insert book into collection, and then deal with counting
			theClass = book.class;
			console.log("Book Class: " + theClass)
			Books.insert(book);
		}

	});

});