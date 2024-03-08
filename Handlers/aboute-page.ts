import * as fileSystem from 'fs';


const aboutePage = (request: any, response: any) => {
    fileSystem.readFile(
        './aditional-files/about.html',
        'utf-8',
        (error, content) => {
            if (error){
                response.sendStatus(404);
            }
            else{
                response.send(content);
            }

        }   
    );
};

export {aboutePage};