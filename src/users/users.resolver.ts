import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';
import { UserService } from './users.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.getUser(getUserArgs);
  }
  // query{
  //   user(userId:"E-3OUZrv3iFENx5IxBHEk"){
  //     userId
  //     email
  //     age
  //     isSubscribed
  //   }
  // }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUserArgs(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.usersService.getUsers(getUsersArgs);
  }
  // query{
  //   users(userIds:"E-3OUZrv3iFENx5IxBHEk"){
  //     userId
  //     email
  //     age
  //     isSubscribed
  //   }
  // }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.usersService.createUser(createUserData);
  }

  // mutation{
  //   createUser(createUserData: {email: "jovanne@gmail.com", age: 26}){
  //     userId
  //     email
  //     age
  //     isSubscribed
  //   }
  // }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.usersService.updateUser(updateUserData);
  }

  // mutation{
  //   updateUser(updateUserData: {userId: "E-3OUZrv3iFENx5IxBHEk", age: 30}){
  //     userId
  //     email
  //     age
  //     isSubscribed
  //   }
  // }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
    return this.usersService.deleteUser(deleteUserData);
  }

  // mutation{
  //   deleteUser(deleteUserData: {userId: "E-3OUZrv3iFENx5IxBHEk"}){
  //     userId
  //     email
  //     age
  //     isSubscribed
  //   }
  // }
}
