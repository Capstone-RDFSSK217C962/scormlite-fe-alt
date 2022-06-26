let path = require('path');
let express = require('express');
let history = require('connect-history-api-fallback');

let app = express();

app.use(history({
    verbose: true,
}));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
    console.log('listening on port ', server.address().port);
});
