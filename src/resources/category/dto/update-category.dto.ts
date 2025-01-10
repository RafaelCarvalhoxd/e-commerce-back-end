import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/resources/category/dto/create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
