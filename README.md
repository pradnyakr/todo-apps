# database-relations

## Command Sequelize

1. Create sequelize init

    ```bash
    npx sequelize-cli init
    ```

2. Create database

    ```bash
    npx sequelize-cli db:create
    ```

3. Create migrations

    ```bash
   npx sequelize-cli model:generate --name user --attributes username:string,em ail:string,password:string,image:string

    npx sequelize-cli model:generate --name item --attributes name:string,type:string,price:integer,stock:integer,image:string,userId:integer

    npx sequelize-cli db:migrate

    ```

    npx sequelize-cli model:generate --name todos --attributes task:string,status:boolean
