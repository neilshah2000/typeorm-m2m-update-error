# error

I have 2 entities with a many to many relationship between them. When i try and update the related entity using repository.update() methid i get the error below


{ QueryFailedError: SQLITE_ERROR: no such column: gfs_application_id
    at new QueryFailedError (C:\Users\ShahN2\Documents\apollo\typeorm\MyProject\src\error\QueryFailedError.ts:9:9)
    at handler (C:\Users\ShahN2\Documents\apollo\typeorm\MyProject\src\driver\sqlite\SqliteQueryRunner.ts:53:26)
    at replacement (C:\Users\ShahN2\Documents\apollo\typeorm\MyProject\node_modules\sqlite3\lib\trace.js:19:31)
    at Statement.errBack (C:\Users\ShahN2\Documents\apollo\typeorm\MyProject\node_modules\sqlite3\lib\sqlite3.js:16:21)
  message: 'SQLITE_ERROR: no such column: gfs_application_id',
  errno: 1,
  code: 'SQLITE_ERROR',
  name: 'QueryFailedError',
  query:
   'UPDATE "gfs_application" SET "id" = ?, "name" = ?, "vendor_name" = ?, "gfs_application_id" = ? WHERE "id" IN (?)',
  parameters: [ 1, 'new-app', 'vend-name', undefined, 1 ] }



# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command
