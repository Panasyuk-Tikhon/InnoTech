const fileSystem = require('fs');
const http = require('http');
const mainPage = require('./Handlers/main-page-handler');
const aboutePage = require('./Handlers/aboute-page');
const contactsPage = require('./Handlers/contacts-page');

const pageController = (request, response) => {
    const url = request.url;
    switch(url){
        case '/':
            mainPage(request, response);
            break;
        case '/aboute':
            aboutePage(request, response);
            break;
        case '/contacts':
            contactsPage(request, response);
            break;
        default:
            response.end();
            break;
    } 
}

const server = http.createServer(pageController);
server.listen(3000);
console.log('server started');