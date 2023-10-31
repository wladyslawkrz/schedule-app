import { DayOfWeek, LessonTime } from 'src/common/enums';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Subject)
  @JoinColumn()
  subject: Subject;

  @Column({
    type: 'boolean',
  })
  isTopWeek: boolean;

  @Column({
    type: 'enum',
    enum: DayOfWeek,
  })
  dayOfWeek: DayOfWeek;

  @Column({
    type: 'enum',
    enum: LessonTime,
  })
  lessonTime: LessonTime;
}
