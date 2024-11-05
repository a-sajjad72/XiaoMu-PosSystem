import { Table, Column, Model, PrimaryKey, DataType } from "sequelize-typescript";


@Table({
    tableName: "user",
    timestamps: false
})
export class User extends Model<User> {

    @PrimaryKey
    @Column(DataType.INTEGER)
    declare uid: number;

    @Column(DataType.STRING)
    declare account: string;

    @Column(DataType.STRING)
    declare password: string;

    @Column(DataType.STRING)
    declare username: string;
}

export default User;