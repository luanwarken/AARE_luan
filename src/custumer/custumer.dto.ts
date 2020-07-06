import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";
import { Optional } from "@nestjs/common";

export class CustumerDto {

    @IsInt({ message: 'Não é um inteiro válido!' })
    id:number;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(6, { message: 'O campo deve ter no mínimo 06 caracteres.'})
    @MaxLength(30, { message: 'O campo deve ter no máximo 30caracteres.' })
    nome: string;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(5, { message: 'O campo deve ter no mínimo 05 caracteres.' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    sobrenome: string;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(10, { message: 'O campo deve ter no mínimo 10 caracteres.' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    email: string;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(6, { message: 'O campo deve ter no mínimo 06 caracteres.' })
    @MaxLength(15, { message: 'O campo deve ter no máximo 15 caracteres.' })
    phone: string;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(5, { message: 'O campo deve ter no mínimo 5 caracteres.' })
    @MaxLength(15, { message: 'O campo deve ter no máximo 15 caracteres.' })
    cpf: string;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(2, { message: 'O campo deve ter no mínimo 02 caracteres.' })
    @MaxLength(20, { message: 'O campo deve ter no máximo 20 caracteres.' })
    estado: string;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(4, { message: 'O campo deve ter no mínimo 04 caracteres.' })
    @MaxLength(20, { message: 'O campo deve ter no máximo 20 caracteres.' })
    cidade: string;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(2, { message: 'O campo deve ter no mínimo 02 caracteres.' })
    @MaxLength(15, { message: 'O campo deve ter no máximo 15 caracteres.' })
    bairro: string;

    @IsString({ message: 'Esta string não é válida!' })
    @MinLength(3, { message: 'O campo deve ter no mínimo 03 caracteres.' })
    @MaxLength(25, { message: 'O campo deve ter no máximo 25 caracteres.' })
    rua: string;

    @Optional()
    @IsString({ message: 'Esta string não é válida!' })
    @MaxLength(20, { message: 'O campo deve ter no máximo 20 caracteres.' })
    cep: string;

}