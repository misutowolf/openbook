# SSU OpenBook

An open-source book swapping/sharing network -- for students, by students!



## What is OpenBook?

OpenBook (working title) is a small web application I designed to be a way for
college students to swap used books (either selling used, or borrowing/lending).
Even though my university has a small little interface for students selling things,
I wanted to provide a more specialized way to facilitate the trading/donating
of books between students for no cost at all.

Not only is this useful in and of itself, but I wanted to use this application
as a way to further improve and practice my web design and development skills, as
well as have some work to use an example for future employers.

I also feel that having a way to trade books for one another would be a great
way to increase a sense of community between students, and offer a way for
us to help one another.

OpenBook was developed using HTML5/CSS3, and is built on the Meteor[1] platform.
Formatting was done using Twitter Bootstrap[2], and styled with a theme from Bootswatch[3]

## Technology in Use

As previously mentioned, Twitter Bootstrap was used for any CSS formatting in
the application.  Furher customization was achieved using a theme found on
Bootswatch, and relevant CSS/JSS (from these frameworks) is hosted via CDN.

I used Meteor for a development platform.  Several additional Meteor
plugins (called Smart Packages) are being used in the development of this
project, and are as follows (this list will be edited as development continues):

-  [bootstrap-3](https://github.com/mangasocial/meteor-bootstrap-3)
-  [accounts-ui-bootstrap-3](https://github.com/mangasocial/meteor-accounts-ui-bootstrap-3)
-  [iron-router](https://github.com/EventedMind/iron-router)
-  [npm](https://github.com/arunoda/meteor-npm)
-  coffeescript (stock package)
-  accounts-password (stock package)

Using meteor-npm, I was able to take advantage of the following NPM module, which
serves as the app's interface to the Amazon Product Advertising API, using credentials
which are -not- part of this repository (for security reasons, obviously).

-  [node-apac](https://github.com/dmcquay/node-apac)

The non-stock packages can be found on GitHub, by clicking on their respective
hyperlinks.

Further technology I am using for book data is Amazon Web Services, an interface
to the large online bookstore that contains bibliographical information
(and covers!) for pretty much every book ever written, it seems.  They provide a
RESTful API which I am able to use to access information I need, given only a
ISBN 10/13 number, which minimizes the amount of data I actually need to store
in the database.  This decision also (hopefully) will reduce any errors such as
typos (incorrect book names, misspelled authors, etc.) that might occur, as well.

## Footnotes
-  [1] [Meteor](http://meteor.com) - JavaScript-based web framework
-  [2] [Twitter Bootstrap](http://getbootstrap.com/) - Responsive CSS framework
-  [3] [Bootswatch](http://bootswatch.com/) - Free themes for Bootstrap (CDN)
