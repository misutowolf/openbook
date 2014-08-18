# Get APAC ready to go?
util = Meteor.require('util')
OperationHelper = Meteor.require('apac').OperationHelper

# Actual Meteor Stuff
Meteor.startup ->

	Meteor.methods

		# Look up data from AWS for the book listing form.
		"isbnLookup": (isbn) ->

			# Strip slashes from ISBN
			isbn = isbn.replace(/-/g,"")
			console.log "Searching for ISBN: " + isbn

			# Consult the cache of search results
			cachedResult = BookSearches.findOne({"isbn": isbn},{sort:{"createdAt": -1}})

			unless cachedResult

				# Grab data from AWS only if it's not there

				opHelper = new OperationHelper
					awsId: AWS_KEY_ID,
					awsSecret: AWS_SECRET_KEY,
					assocId: AWS_ASSOC_ID

				opHelper.execute 'ItemLookup',
					SearchIndex: 'Books',
					ResponseGroup: 'Medium,Images',
					IdType: 'ISBN',
					ItemId: isbn
				, Meteor.bindEnvironment((res) ->

					# Gotta fix this response
					temp = JSON.stringify(res)

					# Use regex on JSON string, make it workable
					temp = temp.replace(/"\$":/g, "\"tempKey\":")
					result = JSON.parse(temp)

					console.log JSON.stringify(result)

					# Check for a lack of response here?

					resultImg = result.ItemLookupResponse.Items[0].Item[0].MediumImage[0].URL[0]
					resultAttribs = result.ItemLookupResponse.Items[0].Item[0].ItemAttributes[0]

					# Create simplified BookSearch "object" to store in DB (reducing data storage)
					theSearch =
						"isbn": isbn
						"author": resultAttribs.Author[0]
						"title": resultAttribs.Title[0]
						"pages": resultAttribs.NumberOfPages[0]
						"img": resultImg
						"publisher": resultAttribs.Publisher[0]
						"pubdate": resultAttribs.PublicationDate[0]
						"amazonLink": result.ItemLookupResponse.Items[0].Item[0].DetailPageURL[0]
						"createdAt": new Date

					# Cache the request for later searches.
					BookSearches.insert theSearch

					console.log "Using AWS result for ISBN: " + isbn

				)

			else
				console.log "Using cached result for ISBN: " + isbn


		"book-insert": (book) ->

			Books.insert book
			console.log "Insert the following into the Books collection:"
			console.log JSON.stringify book
