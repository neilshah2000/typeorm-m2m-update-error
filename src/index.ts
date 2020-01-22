import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import Device from "./entity/device.entity";
import GfsApplication from './entity/gfs-application.entity';

createConnection().then(async connection => {
    let appRepository = connection.getRepository(GfsApplication);
    let deviceRepository = connection.getRepository(Device);

    const device = new Device();
    device.name = 'test-device';
    device.macAddress = '2.5.6.7.12'
    const d1 = await deviceRepository.save(device);

    const gfs = new GfsApplication();
    gfs.name = 'new-app'
    gfs.vendorName = 'vend-name';
    gfs.devices = [];
    gfs.devices.push(d1);
    const a1 = await appRepository.save(gfs);

    const devices = await deviceRepository.find();
    const apps = await appRepository.find();
    console.log("Loaded devices: ", devices);
    console.log("Loaded applications: ", apps);

    // an update on an entity with a many-to-many relationship throws an error
    // "message: 'SQLITE_ERROR: no such column: gfs_application_id',"
    await appRepository.update(1, apps[0]);

}).catch(error => console.log(error));
