import * as fileSystem from 'fs';
import * as http from 'http';

const contactsPage = (request: any, response: any) => {
    fileSystem.readFile(
        './Front/contacts.html',
        'utf-8',
        (error: any, content: any) => {
            if(error){
                response.writeHead(404);
                response.end();
                return;
            }
            else{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(content);
                response.end();
            }
        }
    );
}

export {contactsPage};
