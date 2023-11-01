import { Inject, Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @Inject('SUBJECT_REPOSITORY')
    private subjectRepository: Repository<Subject>,
  ) {}

  async create(subjectData: CreateSubjectDto) {
    const newSubject = this.subjectRepository.create(subjectData);

    return await this.subjectRepository.save(newSubject);
  }

  async findAll() {
    return await this.subjectRepository.find();
  }

  async findOne(id: number) {
    return await this.subjectRepository.findOne({ where: { id } });
  }

  async update(id: number, subjectData: UpdateSubjectDto) {
    await this.subjectRepository.update(id, subjectData);

    return await this.subjectRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.subjectRepository.delete(id);
  }
}
