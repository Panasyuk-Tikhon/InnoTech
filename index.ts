import express from 'express';
import {aboutPage} from './Handlers/about-page';
import {contactsPage} from './Handlers/contacts-page';
const app = express();

app.use(express.static('aditional-files/public-html'));
app.use(express.static('build/typescriptForFront'));

app.get('/about.html', (request, response) => {
    response.redirect('/about');
});

app.get('/contacts.html', (request, response) => {
    response.redirect('/contacts');
});

app.get('/about', (request, response) =>{
    aboutPage(request, response);
});

app.get('/contacts', (request, response) =>{
    contactsPage(request, response);
});

app.listen(3000);
console.log('server started');