import * as fileSystem from 'fs';
import * as http from 'http';
import {mainPage} from './Handlers/main-page-handler';
import {aboutePage} from './Handlers/aboute-page';
import {contactsPage} from './Handlers/contacts-page';


const pageController = (request: any, response: any) => {
    const url: string = request.url;
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