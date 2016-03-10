/**
 * Created by Tauqeer Ahmed on 2/27/2016.
 */

var express = require('express');

var api = express.Router();

var notes = [
    {id : 1 , label : 'First Note' , author : 'Shayam'},
    {id : 2 , label : 'Second Note' , author : 'Brad'},
    {id : 3 , label : 'Middle Note' , author : 'Someone'},
    {id : 4 , label : 'Last Note' , author : 'Talha'},
    {id : 5 , label : 'Really the last note' , author : 'Taha'}
];

var lastId = 6;


api.get('/note',function(req,res){
   res.send(notes);
});

api.post('/note',function(req,res){
    var note = req.body;
    note.id = lastId;
    lastId++;
    notes.push(note);
    res.send(note);
});
api.post('/note/:id/done',function(req,res){
    var noteId = req.params.id;
    var note = null;
    for(var i = 0;i<notes.length;i++){
        if(notes[id].id == req.params.id){
            note = notes[i];
            break;
        }
    }
    note.label = 'Done - ' + note.label;
    res.send(notes);
});
api.get('/note/:id', function(req, res) {
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id == req.params.id) {
            res.send(notes[i]);
            break;
        }
    }
    res.send({msg: 'Note not found'}, 404);
});
api.post('/note/:id', function(req, res) {
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id == req.params.id) {
            notes[i] = req.body;
            notes[i].id = req.params.id;
            res.send(notes[i]);
            break;
        }
    }
    res.send({msg: 'Note not found'}, 404);
});
api.post('/login', function(req, res) {
    console.log('API LOGIN FOR ', req.body);
    res.send({msg: 'Login successful for ' + req.body.username});
});

module.exports = api;