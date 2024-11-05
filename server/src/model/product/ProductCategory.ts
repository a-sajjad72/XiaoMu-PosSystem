import dayjs from "dayjs";
import { Table, Column, Model, PrimaryKey, DataType } from "sequelize-typescript";


@Table({
    tableName: "product_category"
})
export class ProductCategory extends Model<ProductCategory> {

    @PrimaryKey
    @Column(DataType.INTEGER)
    declare id: number;

    @Column(DataType.STRING)
    declare name: string;

    @Column(DataType.STRING)
    get created_at(): string {
        const value = this.getDataValue("created_at");
        return dayjs(value).format("YYYY/MM/DD HH:mm:ss");
    }

    @Column(DataType.STRING)
    get updated_at(): string {
        const value = this.getDataValue("updated_at");
        return dayjs(value).format("YYYY/MM/DD HH:mm:ss");
    }
}

export default ProductCategory;