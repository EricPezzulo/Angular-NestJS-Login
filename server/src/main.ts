import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = 3000;
  const successMsg = `*****************************************************\n🚀 Server started successfully! ⚡\n📡 Sever listening on port:${port} 📡\n******************************************************`;
  await app.listen(port, () => {
    console.log(successMsg);
  });
}
bootstrap();
