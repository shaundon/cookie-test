`npm install -g bower && npm install && bower install && node app`

# understanding first/third party cookie behaviour

## scenario 1
1. set cookie from foo.example.com with no domain
2. is it readable by foo.example.com?
3. is it readable by bar.example.com?
4. is it overwritable by bar.example.com?
 
## scenario 2
1. set cookie from foo.example.com with .example.com domain
2. is it readable by foo.example.com?
3. is it readable by bar.example.com?
4. is it overwritable by bar.example.com?
5. is it read/write-able by example.com
 
## scenario 3
1. set 'disalow third party' cookies
2. include(scenario 1)

## scenario 3
1. set 'disalow third party' cookies
2. include(scenario 2)