const antlr4 = require('antlr4');
const Lexer = require('./ExprLexer');
const Parser = require('./ExprParser');


var input = "2+2*5"
var chars = new antlr4.InputStream(input);

var lexer = new Lexer.ExprLexer(chars);

var tokens  = new antlr4.CommonTokenStream(lexer);

var parser = new Parser.ExprParser(tokens);

console.log(parser);
parser.buildParseTrees = true;
// var tree = parser.MyStartRule();
