import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/core/user/entity/user.entity';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';
import { BASE_RSP, Response } from '@/common/common.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Response<User[]>> {
    const users = await this.usersRepository.find();

    return {
      base_rsp: BASE_RSP,
      data: users,
    };
  }

  async create(data) {
    const { raw } = await this.usersRepository.insert({
      ...data,
      uuid: uuid.v4(),
    });

    return {
      base_rsp: BASE_RSP,
      id: raw.insertId,
    };
  }

  async findUserInfo(uuid: string): Promise<User> {
    if (!uuid) {
      throw new HttpException(
        {
          msg: 'no uuid',
          code: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const userInfo = await this.usersRepository.findOneBy({ uuid });

    return {
      id: userInfo.id,
      uuid: userInfo.uuid,
      username: userInfo.username,
      create_time: userInfo.create_time,
      email: userInfo.email,
      phone: userInfo.phone,
      desc: userInfo.desc,
    };
  }
}
