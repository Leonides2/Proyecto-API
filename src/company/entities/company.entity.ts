import { FooterItem } from "src/footer-item/entities/footer-item.entity";
import { Product } from "src/product/entities/product.entity";
import { Service } from "src/service/entities/service.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Company')
export class Company {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title : string
    @Column()
    desciption : string
    @OneToMany(()=>Product , (product) => product.company)
    products : Product[]

    @OneToMany(()=>Service, (service) => service.company)
    services : Service[]

    @OneToMany(()=>FooterItem, (footerItem)=> footerItem.company)
    footerItems : FooterItem[]

}
