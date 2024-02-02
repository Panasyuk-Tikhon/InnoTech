const fileSystem = require('fs');
const http = require('http');

const contactsPage = (request, response) => {
    fileSystem.readFile(
        './Front/contacts.html',
        'UTF-8',
        (error, content) => {
            if(error){
                response.writeHead(404);
            }
            else{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(content);
            }
            response.end();
        }
    );
}

module.exports = contactsPage;
