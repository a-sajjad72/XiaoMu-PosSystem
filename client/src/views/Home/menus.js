import { Home } from "./Main/home";

import { Cash } from "./Main/market/Cash";
import { Device } from "./Main/device";

import { Supplier } from "./Main/warehouse/Supplier";
import { Commodity } from "./Main/warehouse/Commodity";
import { Stock } from "./Main/warehouse/Stock";
import { BarcodePrint } from "./Main/warehouse/BarcodePrint";

import { Vip } from "./Main/vip";
import { VipSetting } from "./Main/vip/Setting";

import { UserManage } from "./Main/users";

import { DataExport } from "./Main/data/Export";
import { DataImport } from "./Main/data/Import";

import { PromotionCommodityManage } from "./Main/promotion/Commodity";
import { Promotion } from "./Main/promotion/Manage";

import { Orders } from "./Main/statistics/orders";
import { Proportion } from "./Main/statistics/proportion";
import { Trends } from "./Main/statistics/trends";

import { System } from "./Main/system";

export const menus = [
    {
        title: "System Home",
        path: "/home",
        icon: "home",
        permission: false,
        component: Home
    },
    {
        title: "POS Sales",
        path: "/home/market",
        icon: "shop",
        permission: false,
        component: Cash
    },
    {
        title: "Promotion Management",
        path: "/home/promotion",
        icon: "icon-cuxiaohuodong",
        icon_online: true,
        children: [
            {
                title: "Activity Management",
                path: "/home/promotion/manage",
                component: Promotion
            },
            {
                title: "Promotional Product Management",
                path: "/home/promotion/commodity",
                component: PromotionCommodityManage
            }
        ]
    },
    {
        title: "Warehouse Management",
        path: "/home/warehouse",
        icon: "icon-cangkuguanli",
        icon_online: true,
        children: [
            {
                title: "Supplier Management",
                path: "/home/warehouse/supplier",
                component: Supplier
            },
            {
                title: "Stock Management",
                path: "/home/warehouse/stock",
                component: Stock
            },
            {
                title: "Product Management",
                path: "/home/warehouse/commodity",
                component: Commodity
            },
            {
                title: "Label Printing",
                path: "/home/warehouse/barcodeprint",
                component: BarcodePrint
            }
        ]
    },
    {
        title: "Member Management",
        path: "/home/vip",
        icon: "icon-huiyuan-",
        icon_online: true,
        children: [
            {
                title: "Member Management",
                path: "/home/vip/manage",
                component: Vip
            },
            {
                title: "Advanced Features",
                path: "/home/vip/setting",
                component: VipSetting
            }
        ]
    },
    {
        title: "Data Statistics",
        path: "/home/statistics",
        icon: "pie-chart",
        children: [
            {
                title: "Order Details",
                path: "/home/statistics/orders",
                component: Orders
            },
            {
                title: "Proportion Analysis",
                path: "/home/statistics/proportion",
                component: Proportion
            },
            {
                title: "Trend Analysis",
                path: "/home/statistics/trends",
                component: Trends
            }
        ]
    },
    {
        title: "User Management",
        path: "/home/users",
        icon: "user",
        component: UserManage
    },
    {
        title: "Data Management",
        path: "/home/data",
        icon: "database",
        children: [
            {
                title: "Product Import",
                path: "/home/data/import",
                component: DataImport
            },
            {
                title: "Data Export",
                path: "/home/data/export",
                component: DataExport
            },
        ]
    },
    {
        title: "Device Management",
        path: "/home/device",
        icon: "printer",
        component: Device
    },
    {
        title: "System Settings",
        path: "/home/system",
        icon: "setting",
        component: System
    }
];

export const menuValue = (() => {
    const menuMap = {};
    const router = [];
    const menuPath = menus.reduce((result, { path, children, title, component }) => {
        if (children) {
            let parentPath = path;
            children.map(({ path, title, component }) => {
                result.push([path, parentPath]);
                menuMap[path] = title;
                router.push({
                    path,
                    component
                });
            });
        } else {
            result.push([path]);
            menuMap[path] = title;
            router.push({
                path,
                component
            });
        }
        return result;
    }, []);
    return {
        menuMap, menuPath, router
    }
})();