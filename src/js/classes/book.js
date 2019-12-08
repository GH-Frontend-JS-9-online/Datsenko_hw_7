function Book(title, author) {
	this.title = title
	this.author = author
}
Book.prototype.getTitle = function() {
	return `Title: ${this.title}`
}
Book.prototype.getAuthor = function() {
	return `Author: ${this.author}`
}

module.exports = Book