import {Controller, Get, Post, Body, Param} from "@nestjs/common";
import { UsersService } from "./users.services";
import { CreateUserDto } from "./dto/user.dto";
import { User } from "./interfaces/user.interface";


@Controller('users')
export class UsersController{

    constructor(private userService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        this.userService.create(createUserDto);
    }

    @Get('hello')
    async sayHelloUsers() {
        return this.userService.helloUsers();
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
