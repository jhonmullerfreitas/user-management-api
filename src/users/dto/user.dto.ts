import { IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}

export class FindUserByEmail {
    @IsNotEmpty()
    @IsEmail()
    email: string
}