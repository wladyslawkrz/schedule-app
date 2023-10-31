import { Subject } from 'src/modules/subject/entities/subject.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lecturer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @OneToMany(() => Subject, (subject) => subject.lecturer)
  subjects: Subject[];
}
