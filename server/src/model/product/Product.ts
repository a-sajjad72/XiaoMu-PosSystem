import { Table, Column, Model, DataType } from "sequelize-typescript";


@Table({
    tableName: "product",
    timestamps: false
})
export class Product extends Model<Product> {

    @Column(DataType.STRING)
    declare name: string;

    @Column(DataType.NUMBER)
    declare price: number;
}

export default Product;