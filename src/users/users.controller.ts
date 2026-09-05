import {Controller, Get, Post, Body, Param} from "@nestjs/common";
import { UsersService } from "./users.services";
import { CreateUserDto } from "./dto/user.dto";
import { User } from "./interfaces/user.interface";


@Controller('users')
export class UsersController{

    constructor(private userService: UsersService) {}

    @Get('hello')
    async sayHelloUsers() {
        return this.userService.helloUsers();
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto)
        this.userService.create(createUserDto);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return `This action returns a user by ${id}`;
    }
}
