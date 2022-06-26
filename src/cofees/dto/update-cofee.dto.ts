import { PartialType } from '@nestjs/mapped-types';
import { CeateCofeeDto } from './ceate-cofee.dto';

export class UpdateCofeeDto extends PartialType(CeateCofeeDto) { }
