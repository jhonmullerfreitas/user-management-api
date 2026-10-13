import {Controller, Get, Post, Body, Param, Delete} from "@nestjs/common";
import { UsersService } from "./users.services";
import { CreateUserDto, FindUserByEmail } from "./dto/user.dto";
import { User } from "./interfaces/user.interface";

@Controller('users')
export class UsersController{

    constructor(private userService: UsersService) {}

    @Get('hello')
    async sayHelloUsers() {
        return this.userService.helloUsers();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        this.userService.create(createUserDto);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('/findUserByEmail')
    async getUserByEmail(@Body() findUserByEmail: FindUserByEmail): Promise<string> {
        return this.userService.findOne(findUserByEmail.email)
    }

    @Delete('/deleteUserByEmail')
    async deleteUserByEmail(@Body() findUserByEmail: FindUserByEmail): Promise<string> {
        return this.userService.deleteUser(findUserByEmail.email)
    }
}
