import { DataSource } from 'typeorm';
import { Schedule } from './schedule.entity';

export const ScheduleProvider = [
  {
    provide: 'SCHEDULE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Schedule),
    inject: ['DATA_SOURCE'],
  },
];
