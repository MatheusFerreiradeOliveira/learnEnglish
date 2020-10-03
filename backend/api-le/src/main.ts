import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// npm i --save helmet
import * as helmet from 'helmet';
/**
 * ajudar a proteger seu aplicativo de algumas vulnerabilidades da web conhecidas,
 * definindo cabeçalhos HTTP de forma adequada
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //habilitando cors
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
