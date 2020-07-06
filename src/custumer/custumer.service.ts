import { Injectable } from '@nestjs/common';
import { Custumer } from './custumer.entity';

@Injectable()
export class CustumerService {

    custumers: Array<Custumer> = [];

    constructor(){
        let custumer = new Custumer();
        custumer.id = 123;
        custumer.nome = 'Joao';
        custumer.sobrenome = 'Silva';
        custumer.phone ='1234567';
        custumer.cpf = '87654321';
        custumer.estado = 'Bahia';
        custumer.cidade ='Salvador';
        custumer.bairro = 'Centro';
        custumer.rua = 'Avenida principal';
        custumer.cep ='345678900';
    }

    findAll() {
        
        return this.custumers;
    }

    save(custumer: Custumer) {
        this.custumers.push(custumer);
    }
}
