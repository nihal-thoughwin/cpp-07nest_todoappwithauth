import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserEntityRepository: Repository<UserEntity>,
  ) {}

  async create(data: any): Promise<UserEntity> {
    return this.UserEntityRepository.save(data);
  }

  async findOne(condition: any): Promise<UserEntity> {
    return this.UserEntityRepository.findOneBy(condition);
  }
}
