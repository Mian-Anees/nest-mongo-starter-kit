import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    AuthModule,
    UsersModule,
    CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
