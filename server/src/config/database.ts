import type { SequelizeOptions } from "sequelize-typescript";

interface DataBaseConfig extends SequelizeOptions {
    tablePrefix: string
}

const config: DataBaseConfig = {
    database: "postgres",
    dialect: "postgres",
    username: "postgres",
    password: "xxxxxx.",
    tablePrefix: "xm_",
    host: "localhost",
    port: 9981
};

export default config;