import { PartialType } from '@nestjs/swagger';
import { CreateSubCategoryDto } from 'src/resources/subcategory/dto/create-subategory.dto';

export class UpdateSubCategoryDto extends PartialType(CreateSubCategoryDto) {}
