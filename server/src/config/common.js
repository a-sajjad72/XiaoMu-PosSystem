import path from "path";

const db_path = path.resolve("./", "db/data.db");

const common = {
    port: 8888,
    db_path,
    default_admin_group_name: "Administrator Group",
    default_pos_group_name: "Cashier Group",
    default_supplier: "Default Supplier",
    default_all_category: "TREE_BASE",
    default_admin_username: "admin",
    default_admin_password: "password",
    default_pos_username: "pos",
    default_pos_password: "password"
}

export default common;