import { User, UserCreateAttributes } from '../models/user.model';

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

  async findByPk(id: number): Promise<UserAttributes | null> {
  try {
      const user = await User.findByPk(id);
      return user ? user.toJSON() : null; 
  } catch (error) {
      throw error;
  }
}

  async findAll(): Promise<UserAttributes[]> {
    try {
      const data = await User.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async create(user: UserCreateAttributes): Promise<UserAttributes> {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async updateById(id: number, { pin, email, firstname, lastname, age }: Partial<UserAttributes>): Promise<UserAttributes | null> {
    try {
      const userToUpdate = await User.findByPk(id);
      if (!userToUpdate) throw new Error('User not found');

      await userToUpdate.update({ pin, firstname, lastname, email, age });
      return userToUpdate;
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id: number): Promise<{ message: string }> {
    try {
      const userToDelete = await User.findByPk(id);
      if (!userToDelete) throw new Error('User not found');

      await userToDelete.destroy();
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
