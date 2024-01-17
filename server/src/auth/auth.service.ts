import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(){
        
    }

    createUser(login: string, hash: string, password: string) {

    }
    findUser(id: string) {

    }
    updateUser(login: string, hash: string, password: string, newPassword: string, name: string, email: string, phone: string) {

    }
}