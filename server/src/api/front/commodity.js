import express from "express";
import { throwError } from "../../middleware/handleError.js";
import CommodityTask from "../../tasks/frontend/commodity.js";

const route = express.Router();

route.get("/:query", async (req, res, next) => {

    const { warehouse } = req.query;
    const isWareQueryFlag = warehouse && warehouse === "true";
    // Flag for warehouse management interface query

    const { isAdmin } = req["jwt_value"];

    if (isWareQueryFlag && !isAdmin) {
        return throwError(next, "Non-admin users cannot perform this operation!");
    }

    const { query } = req.params;

    const list = await CommodityTask.getCommodityDetails(query.toUpperCase(), isWareQueryFlag);
    // Query results

    if (isWareQueryFlag) {
        // If warehouse management interface query, return list directly without parsing

        return res.json(list);
    }


    let data = [];
    if (list.length !== 0) {
        data = await CommodityTask.parseCommodityList(list);
    }

    res.json(data);
})

export default route;