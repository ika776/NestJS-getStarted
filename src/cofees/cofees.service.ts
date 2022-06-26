import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Cofee } from './entities/cofee.entity';

@Injectable()
export class CofeesService {
  // eslint-disable-next-line prettier/prettier
  private cofees: Cofee[] = [
    {
      id: 1,
      name: 'ika',
      brand: 'budutabuty',
      flavors: ['coklat', 'vanili'],
    },
  ];
  findAll() {
    return this.cofees;
  }
  findOne(id: string) {

    const cofee = this.cofees.find(item => item.id === +id);
    if (!cofee) {
      // throw new HttpException(`Coffe #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Cofe id #${id} not fund`);
    }
    return cofee;
  }
  create(createCofeeDto: any) {
    this.cofees.push(createCofeeDto);
    return createCofeeDto;
  }
  update(id: string, updateCofeeDto: any) {
    const existingCofee = this.findOne(id);
    if (existingCofee) {
      // update the existing entity
    }
  }
  remove(id: string) {
    const cofeeIndex = this.cofees.findIndex(item => item.id === +id);
    if (cofeeIndex >= 0) {
      this.cofees.splice(cofeeIndex, 1);
    }
  }
}
