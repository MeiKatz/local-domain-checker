# Local Domain Checker
Check if the domain your script is running on belongs to a local machine

## How to use
first load script into your file ...
```HTML
<script src="local-domain-checker.js"></script>
```
... and than call the function
```JavaScript
// without an argument
window.isLocal(); // returns either true or false
// with an argument
window.isLocal("localhost"); // true
window.isLocal("127.0.0.1"); // true
window.isLocal("::1"); // true
window.isLocal("foobar.local"); // true
window.isLocal("foobar.localhost"); // true
window.isLocal("foobar.test"); // true

window.isLocal("example.org"); // false
window.isLocal("142.42.42.42"); // false
```
