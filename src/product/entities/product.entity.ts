import { Company } from "src/company/entities/company.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Product')
export class Product {

    @PrimaryGeneratedColumn()
    id : number
    @Column()
    url : string
    @Column()
    description : string
    @ManyToOne(() => Company , (company) => company.products)
    company : Company
}
