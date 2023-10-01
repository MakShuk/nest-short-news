import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [ResourceController],
	providers: [ResourceService],
})
export class ResourceModule {}
