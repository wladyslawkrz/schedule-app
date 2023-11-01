import { Inject, Injectable } from '@nestjs/common';
import { LecturerDto } from './dto/lecturer.dto';
import { Repository } from 'typeorm';
import { Lecturer } from './entities/lecturer.entity';

@Injectable()
export class LecturerService {
  constructor(
    @Inject('LECTURER_REPOSITORY')
    private lecturerRepository: Repository<Lecturer>,
  ) {}

  async create(lecturerData: LecturerDto): Promise<Lecturer> {
    const newLecturer = this.lecturerRepository.create(lecturerData);

    return await this.lecturerRepository.save(newLecturer);
  }

  async findAll() {
    return await this.lecturerRepository.find();
  }

  async findOne(id: number) {
    return await this.lecturerRepository.findOne({ where: { id } });
  }

  async update(id: number, lecturerData: LecturerDto) {
    await this.lecturerRepository.update(id, lecturerData);

    return await this.lecturerRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.lecturerRepository.delete(id);
  }
}
