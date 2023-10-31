import { DataSource } from 'typeorm';
import { Lecturer } from './lecturer.entity';

export const LecturerProvider = [
  {
    provide: 'LECTURER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Lecturer),
    inject: ['DATA_SOURCE'],
  },
];
