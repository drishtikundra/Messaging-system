import { Controller,Get, Post,Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
// export class MessagesController {
//     //property messagesService which is an instance of MessagesService
//     messagesService:MessagesService;

//     constructor(){
//         //DONT DO THIS IN REAL APPS
//         //USE DEPENDENCY INJECTION
//         this.messagesService=new MessagesService();
//     }
//     @Get()
//     listMessages(){
//         return this.messagesService.findAll();
//     }

//     @Post()
//     // createMessageDto is a validator which validates thatresponse is a string
//     createMessage(@Body() body: any){
//         console.log('test', body);
//         return this.messagesService.create(body.content);
        
//     }
// //     @Post()
// //     createMessage(@Body() body: any) {
// //     console.log("Received content:", body); // Log the received body
// //     return this.messagesService.create(body.content);
// // }
//     @Get('/:id')
//     async getMessage(@Param('id') id: string){
//         // console.log(id); 

//         const message= await this.messagesService.findOne(id);
//         if(!message){
//             throw new NotFoundException('msg not found, sahi se likho');
//         }
//         return message;
//     }
// }
export class MessagesController {
    //property messagesService which is an instance of MessagesService
    

    constructor(public messagesService: MessagesService){
        
        
    }
    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    // createMessageDto is a validator which validates thatresponse is a string
    createMessage(@Body() body: any){
        console.log('test', body);
        return this.messagesService.create(body.content);
        
    }
//     @Post()
//     createMessage(@Body() body: any) {
//     console.log("Received content:", body); // Log the received body
//     return this.messagesService.create(body.content);
// }
    @Get('/:id')
    async getMessage(@Param('id') id: string){
        // console.log(id); 

        const message= await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException('msg not found, sahi se likho');
        }
        return message;
    }
}
