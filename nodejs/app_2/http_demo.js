//get express function
const express = require ('express');

//use joi
const joi = require('joi');

//create an application 
const app = express();

app.use(express.json()); //express.json() return to use

//define web root
app.get('/',(req,res) => {
    res.send('Hi bro!')
});
//define a folder

const demo_api = [
    { id: 1, data: 'api 1'},
    { id: 2, data: 'api 2'},
    { id: 3, data: 'api 3'},
];

app.get('/dryang/api',(req,res) => {
    res.send(demo_api)
    res.end();
});

//define api 1
app.get('/dryang/api/:id',(req,res) => {
    //res.send(req.params);//send object {id :year }
    //res.send(req.query);//key word soryBy=name

    //a complex res.send
    let api = demo_api.find( function(element) {
        return element.id === parseInt(req.params.id) //req.params.id is a string need to trun into int
    });
    /*another way to do
     let api = demo_api.find( (element) => element.id === parseInt(req.params.id));
    */

    //if api is not found
    if (!api) return res.status(404).send('the api id is not found')
    else res.send(api);
});

//demo of post

app.post('/dryang/api',(req,res) => {

    //use joi to validate data

    //put required data to schema
    const schema = {
        //the data name must consistant with req data name
        data: joi.string().min(3).required()
    };
    
    //joi validate return a object
    const result = joi.validate(req.body, schema);
    console.log(result);
    
    if ( result.error ) {
        res.status(400).send(result.error.details[0].message);
        return;
    } 
    
    //normal way to validate data
    //add validation 
    if ( !req.body.data || req.body.data.length < 3 )
        //return error message
    return res.status(400).send('the data length is less than 3 characters');
       
  
    //receive new data
    const new_api= {
        id: demo_api.length + 1,
        data: req.body.data
    }
    //add new data to orginal data
    demo_api.push(new_api);
    //respons to customer
    res.send(new_api);
});

//demo put function
app.put('/dryang/api/:id', (req,res) => {
    
    //check if exists
    let api = demo_api.find((element) => element.id === parseInt(req.params.id));
    //if api is not found
    if (!api) {
        res.status(404).send('the api id is not found');
        return;
    }
    
    //function validate to validate data
    const { error } = validatedata(req.bod)// equal to result.error

    if ( error ) return res.status(400).send(result.error.details[0].message);
    //update data
    api.data = req.body.data;
    //return data to customer
    res.send(api);
});

//validate function
function validatedata(data) {
    //if exists validate
    const schema = {
        //the data name must consistant with req data name
        data: joi.string().min(3).required()
    };
    //joi validate return a object
    return joi.validate(data, schema);
    //console.log(result);
}

//demo delete
app.delete('/dryang/api/:id', (req,res) => {
    //find the api id
    let api = demo_api.find((element) => element.id === parseInt(req.params.id));
    //if api is not found
    if (!api) return res.status(404).send('the api id is not found');
     
    //if found delete
    const index = demo_api.indexOf(api);
    demo_api.splice(index, 1);
    res.send(api);
});

//define prot
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on prot ${port}...`));
 

