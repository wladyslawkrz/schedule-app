import { DataSource } from 'typeorm';
import { Subject } from './subject.entity';

export const SubjectProvider = [
  {
    provide: 'SUBJECT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Subject),
    inject: ['DATA_SOURCE'],
  },
];
