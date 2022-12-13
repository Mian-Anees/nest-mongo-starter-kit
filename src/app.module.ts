import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { AppLoggerMiddleware } from './utils/config/middleware';
import { NodeEnv } from './utils/enums/enum';

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
  providers: [AppLoggerMiddleware],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    if (process.env.NODE_ENV === NodeEnv.DEVELOPMENT) {
      consumer
        .apply(AppLoggerMiddleware)
        .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
  }
} { }
