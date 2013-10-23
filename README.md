phonegap-topcoat-angular-template
=================================

This is essentially a boilerplate to generate a Phonegap app based on the Topcoat CSS framework using AngularJS for routing, etc.  The app comes with a main application area and a sidebar menu.  This app is NOT an Angular JS rewrite of Topcoat elements.

Prerequisites:
--------------
* Node installed
* Grunt / Grunt CLI installed
* Phonegap installed
* Phonegap CLI Installed

Installation:
-------------
* Clone the app

<code>> git clone https://github.com/calendee/phonegap-topcoat-angular-template.git ~/MyAwesomeApp
</code>   

* Install the Phonegap directories

<code>> phonegap create ~/MyAwesomeApp --name "MyAwesomeApp" --id "com.REPLACE-THIS-WITH-SOMETHING.MyAwesomeApp"
</code>   

* Delete some PhoneGap cruft (Careful with this!)

<code>> cd ~/MyAwesomeApp; rm -rf www/spec; rm www/spec.html; rm www/js/index.js; rm www/css/index.css; rm www/index.html
</code>   

* Install the required Node modules

<code>> cd ~/MyAwesomeApp; npm install
</code>   

* Run Grunt to put all content into the www directory and to create the iOS platform specific code and start the iOS simulator

<code>> cd ~/MyAwesomeApp; grunt; phonegap run ios
</code> 

Start Customizing:
------------------
To customize the app, make ALL your changes in the ~/MyAwesomeApp/src/ directory. ALL assets should be placed in the ~/MyAwesomeApp/src/ directory. Do NOT edit anything in the ~/MyAwesomeApp/www/ directory as it will be overridden when you run grunt. If you need new assets to be compiled, copied etc into the www directory, edit Grunt.js so that the build process moves them as required.

Once your changes are completed, build and go as follows:
<code>> cd ~/MyAwesomeApp; grunt; phonegap run ios
</code> 

OR 

<code>> cd ~/MyAwesomeApp; grunt; phonegap build ios
</code> 

NOTE : I create a symlink to the ~/MyAwesomeApp/www/ directory so that code changes can be viewed in a web browser without having to run in the iOS simulator for every single change.  Depending on your setup, you will do this differently.

<code>> ln -s ~/MyAwesomeApp/www/ /usr/local/zend/apache2/htdocs/MyAwesomeApp
</code> 

Git Ignore Issues:
------------------
The supplied Git Ignore file is configured to ignore most of the PhoneGap generated contents. At this time, I've ignored everything I don't feel is necessary to track.  If you have different criteria than me, modify the .gitignore file to your hearts content.

Credits:
--------
* https://github.com/kristoferjoseph/topcoat-phonegap

    I basically copied the app design / layout from Kristofer Joseph and then put it inside Angular directives
* https://github.com/topcoat/topcoat

    This app uses Topcoat for the theming
* https://github.com/phonegap/phonegap-cli

    The app uses Michael Brooks' phonegap-cli to install the phonegap structure.

License
-------

Original author: Justin Noel
Copyright (c) 2013 Calendee LLC
All rights reserved.

This project is available under the MIT license. See [LICENSE][license].

[license]: https://github.com/calendee/phonegap-topcoat-angular-template/blob/master/LICENSE
