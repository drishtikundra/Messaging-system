import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";
// export class MessagesService{
//     messagesRepo: MessagesRepository;

//     constructor(){

//         // in our cod, service is creating its own dependencies. MessagesRepository is a dependency of service.
//         // A service cannot work correctly unless it has a repository. So we have to set up a dependency between these 2 classes and the service is creating its dependency on its own. We perform dependency injection to set up dependency between 2 classes
//         // we don't do this in nest apps

//         //making a new instance of MessagesRepository in the service and assign it to a property (messagesRepo) in class


//         this.messagesRepo=new MessagesRepository();
//         }
    
//     findOne(id:string) {
//         return this.messagesRepo.findOne(id);
//     }

//     findAll(){
//         return this.messagesRepo.findAll();
//     }

//     create(content: string){
//         console.log("ye aya: ", content);
//         return this.messagesRepo.created(content);
//     }
//     }

@Injectable()
export class MessagesService{
    messagesRepo: MessagesRepository;

    constructor(messagesRepo: MessagesRepository){

        // in our code, service is creating its own dependencies. MessagesRepository is a dependency of service.
        // A service cannot work correctly unless it has a repository. So we have to set up a dependency between these 2 classes and the service is creating its dependency on its own. We perform dependency injection to set up dependency between 2 classes
        // we don't do this in nest apps

        //making a new instance of MessagesRepository in the service and assign it to a property (messagesRepo) in class


        this.messagesRepo=messagesRepo;
        }
    
    findOne(id:string) {
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(content: string){
        console.log("ye aya: ", content);
        return this.messagesRepo.created(content);
    }
    }





