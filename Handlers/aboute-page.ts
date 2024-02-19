import * as fileSystem from 'fs';
import * as http from 'http';

const aboutePage = (request: any, response: any) => {
    fileSystem.readFile(
        './Front/aboute.html',
        'utf-8',
        (error, content) => {
            if (error){
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

export {aboutePage};