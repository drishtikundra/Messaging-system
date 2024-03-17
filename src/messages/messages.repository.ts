import {readFile, writeFile} from 'fs/promises';
import { Injectable } from '@nestjs/common'; 

@Injectable()
export class MessagesRepository{
    async findOne(id:string){
        const contents=await readFile('messages.json','utf8');
        const messages=JSON.parse(contents);
        return messages[id];
    }

    async findAll(){
        const contents=await readFile('messages.json','utf8');
        const messages=JSON.parse(contents);
        return messages;
    }

    async created(content:string){
        const contents=await readFile('messages.json','utf8');
        const messages=JSON.parse(contents);

        const id=Math.floor(Math.random()*999);

        messages[id]={id,content}; //messages is an array of JSON documents jismein hrr document mein id,contents ke key-value pairs hn
        await writeFile('messages.json',JSON.stringify(messages));

    }
}