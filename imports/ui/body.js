import TextDocs from '/imports/api/TextDocs';
import {Meteor} from 'meteor/meteor';

import './body.html'

Template.body.onCreated( ()=>{
    var docList = TextDocs.find({})
    console.log( docList )
});

Template.inputNewDocs.events({
    'submit': (e,t)=>{
        var inputText = e.target.inputText.value;
        var dt = new Date();
        var timestamp = dt.toUTCString().replace(' ','-');
        var docName = "text-"+timestamp
        var docContent = "\"" + inputText + "\"";
        var newDoc = {
            user:  Meteor.user().username,
            name:  docName,
            content: docContent
        }
        TextDocs.insert( newDoc );        
    }
})
