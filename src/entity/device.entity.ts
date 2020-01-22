import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import GfsApplication from './gfs-application.entity';

/**
 * A Device.
 */
@Entity('device')
export default class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'mac_address' })
    macAddress: string;

    @ManyToMany(type => GfsApplication)
    gfsApplications: GfsApplication[];
}
