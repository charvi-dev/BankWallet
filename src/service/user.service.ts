import { TestUser, UserCreateAttributes } from '../models/user.model';

interface UserAttributes {
  userid: number;
  pin: string;
  email: string;
  firstname: string;
  lastname: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

class UserService {

 async  findByPk(arg0: { id: string; }) {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<UserAttributes[]> {
    try {
      const data = await TestUser.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async create(user: UserCreateAttributes): Promise<UserAttributes> {
    try {
      const newUser = await TestUser.create(user);
      return newUser;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async updateById(id: number, { pin, email, firstname, lastname, age }: Partial<UserAttributes>): Promise<UserAttributes | null> {
    try {
      const userToUpdate = await TestUser.findByPk(id);
      if (!userToUpdate) throw new Error('User not found');

      await userToUpdate.update({ pin, email, firstname, lastname, age });
      return userToUpdate;
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id: number): Promise<{ message: string }> {
    try {
      const userToDelete = await TestUser.findByPk(id);
      if (!userToDelete) throw new Error('User not found');

      await userToDelete.destroy();
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
