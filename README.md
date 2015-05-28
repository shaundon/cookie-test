`npm install -g bower && npm install && bower install && node app`

# understanding first/third party cookie behaviour

All tests performed in Chrome for OS X.

## With third party cookies enabled in the browser

### Scenario 1

1. set cookie from foo.example.com with no domain
2. is it readable by foo.example.com? YES
3. is it readable by bar.example.com? NO
4. is it overwritable by bar.example.com? NO, because it's a totally separate cookie
 
### Scenario 2

1. set cookie from foo.example.com with .example.com domain
2. is it readable by foo.example.com? YES
3. is it readable by bar.example.com? YES
4. is it overwritable by bar.example.com? YES
5. is it read/write-able by example.com? YES

## With third party cookies disabled
 
### Scenario 3

1. set cookie from foo.example.com with no domain
2. is it readable by foo.example.com? YES
3. is it readable by bar.example.com? NO
4. is it overwritable by bar.example.com? NO, because it's a totally separate cookie

### Scenario 4

1. set cookie from foo.example.com with .example.com domain
2. is it readable by foo.example.com? YES
3. is it readable by bar.example.com? YES
4. is it overwritable by bar.example.com? YES
5. is it read/write-able by example.com? YES

## On a different port

1. Run the app and set a cookie
2. Restart the app on a different port
3. Is the cookie still readable from the different port? YES



