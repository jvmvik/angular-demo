Dynamic Tree built with AngularJS 1.2
======

In this example I'm experimenting with AngularJS the creation of a tree composed by a set of branch.
Each branch are dynamically loaded on demand when the user click on the parent node.
A branch is collection of node recursively lazily-loaded .

This implementation should be generic enough to run on any platform (mobile, desktop..)

This example has been deeply inspired by:
http://blog.boxelderweb.com/2013/08/19/angularjs-a-lazily-loaded-recursive-tree-widget/

But, I have one major improvement by adding the capability to interact with $http service.
I had to tweak the directive 'uiTreeNode' to interact with the promise return by the $http service.

Also, I have separated the developer application and the library source code.

To test this, download the source then open the index.html on a runnning web server.

Note: You must this example of a web server.
For security reason AngularJS cannot open a file thank to the classic file protocol (Cross-scripting security)
So, you must run a web server, and copy the content of this project into it.
Or you can use IDEA 13 which automatically start a light web server on the background to help you to debug.


Credit:
 - jvmvik@gmail.com
 - http://blog.milkyway.io
 - Feb 6 2014