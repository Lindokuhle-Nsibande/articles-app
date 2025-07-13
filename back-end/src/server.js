import express from 'express';

const app = express();

app.get('/hellow', function(req, res){
    res.send('Hellow!');
});

app.listen(8000, function(){
    console.log('Server is listening on port 8000');
});