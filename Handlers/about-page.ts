import * as fileSystem from 'fs';


const aboutPage = (request: any, response: any) => {
    fileSystem.readFile(
        './aditional-files/public/about.html',
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

export {aboutPage};