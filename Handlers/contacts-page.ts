import * as fileSystem from 'fs';

const contactsPage = (request: any, response: any) => {
    fileSystem.readFile(
        './aditional-files/contacts.html',
        'utf-8',
        (error: any, content: any) => {
            if(error){
                response.sendStatus(404);
            }
            else{
                response.send(content);
            }
        }
    );
}

export {contactsPage};
