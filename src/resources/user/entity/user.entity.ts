import { Role } from 'src/resources/roles/entity/role.entity';

export class User {
  id: number;
  name: string;
  roles: Role[];
  cpf: string;
  gender: string;
  birthdate: Date;
  phone: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    cpf: string,
    gender: string,
    birthdate: Date,
    phone: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.gender = gender;
    this.birthdate = birthdate;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
