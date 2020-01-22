import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import Device from './device.entity';

/**
 * A GfsApplication.
 */
@Entity('gfs_application')
export default class GfsApplication  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'vendor_name' })
    vendorName: string;

    @ManyToMany(type => Device, {eager: true})
    @JoinTable({
        name: 'gfs_application_device',
        joinColumn: { name: 'gfs_application_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'device_id', referencedColumnName: 'id' }
    })
    devices: Device[];
}
