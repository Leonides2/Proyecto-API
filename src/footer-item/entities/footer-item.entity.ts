import { Company } from "src/company/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('FooterItem')
export class FooterItem {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    itemContent: string
    @ManyToOne(()=> Company, (company) => company.footerItems)
    company : Company
}
