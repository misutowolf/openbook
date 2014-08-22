Template.dashboard.helpers({

	bookList: function() {
		return Books.find({owner: this._id});
	}

});