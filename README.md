`npm install -g bower && npm install && bower install && node app`

# understanding first/third party cookie behaviour

## scenario 1
1. set cookie from foo.example.com with no domain
2. is it readable by foo.example.com? YES
3. is it readable by bar.example.com? NO
4. is it overwritable by bar.example.com? NO, because it's a totally separate cookie
 
## scenario 2
1. set cookie from foo.example.com with .example.com domain
2. is it readable by foo.example.com? YES
3. is it readable by bar.example.com? YES
4. is it overwritable by bar.example.com? YES
5. is it read/write-able by example.com? YES
 
## scenario 3
1. set 'disalow third party' cookies
1. set cookie from foo.example.com with no domain
2. is it readable by foo.example.com? YES
3. is it readable by bar.example.com? NO
4. is it overwritable by bar.example.com? NO, because it's a totally separate cookie

## scenario 4
1. set 'disalow third party' cookies
1. set cookie from foo.example.com with .example.com domain
2. is it readable by foo.example.com? YES
3. is it readable by bar.example.com? YES
4. is it overwritable by bar.example.com? YES
5. is it read/write-able by example.com? YES