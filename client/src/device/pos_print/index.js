export { PosPrintConfig } from "./config";

export class PosPrint {

    static async print(data) {
        console.log("[Device]Receipt Printer: ", data);
    }
}