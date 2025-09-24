export { ClientDisplayConfig } from "./config";

export class ClientDisplay {

    static async show({
        all_price = 0,
        // 应付金额

        pay_price = 0,
        // 付款金额

        change = 0
        // 找零金额
    }) {
        // 设置客显显示内容

        console.log(`[Device]Customer Display: Current amount due ${all_price}, payment amount ${pay_price}, change amount ${change}`);
    }

    static async reset() {
        // 清空客显当前结果
    }
}