import { Lecturer } from 'src/modules/lecturer/entities/lecturer.entity';
import { Schedule } from 'src/modules/schedule/entities/schedule.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import { DataSource } from 'typeorm';

export const typeOrmDBProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [Lecturer, Schedule, Subject],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
