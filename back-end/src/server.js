import express from 'express';

const app = express();

app.use(express.json());

app.get('/hellow', function(req, res){
    res.send('Hellow from get request!');
});

app.post('/hellow', function(req, res){
    res.send('Hellow, '+ req.body.name +' from get request!');
});

app.listen(8000, function(){
    console.log('Server is listening on port 8000');
});