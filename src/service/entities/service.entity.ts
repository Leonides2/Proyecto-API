import { Company } from "src/company/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Service')
export class Service {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    title : string
    @Column()
    content : string
    @Column()
    url: string
    @ManyToOne(()=>Company, (company) => company.services)
    company: Company
}
