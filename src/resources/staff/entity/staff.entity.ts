import { Role } from 'src/resources/roles/entity/role.entity';

export class Staff {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
  active: boolean;
  phone: string;
  role: Role;
  createdAt: Date;
  updatedAt?: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    image: string,
    active: boolean,
    phone: string,
    role: Role,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.image = image;
    this.active = active;
    this.phone = phone;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
