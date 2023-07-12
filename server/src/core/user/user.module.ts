import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/core/user/entity/user.entity';
import { UserController } from '@/core/user/user.controller';
import { UserService } from '@/core/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
