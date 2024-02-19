import * as fileSystem from 'fs';
import * as http from 'http';
import * as path from 'path';

const fileHandler = (request: any, response: any) => {
    const filePath: any = './' + request.url;
    const responseType:any = getResponseType(path.extname(filePath));
    console.log(filePath);
    console.log(responseType);
    fileSystem.readFile(
        filePath,
        'utf-8',
        (error, content) => {
            if(error){
                response.writeHead(404);
                response.end();
                return;
            } else{
                response.writeHead(200, {'Content-Type': responseType});
                response.write(content);
                response.end();
            }
        }
    );
}

function getResponseType(extension: any){
    switch(extension){
        case '.html':
        case '.htm':
            return 'text/html';
        case '.js':
            return 'text/javascript';
        default:
            return 'application/octet-stream';
    }
}

export  {fileHandler};