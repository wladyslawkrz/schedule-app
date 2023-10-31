import { Lecturer } from 'src/modules/lecturer/entities/lecturer.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subjectName: string;

  @ManyToOne(() => Lecturer, (lecturer) => lecturer.subjects)
  lecturer: Lecturer;
}
