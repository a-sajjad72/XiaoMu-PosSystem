All APIs except the login interface require a token for access

## Login

```
/api/login
Login interface

Method: post
Parameters: {
    username: "username",
    password: "password"
}
```

```
/api/token/auth
Verify token validity

Method: get
```
---

## Home Page Data

```
/api/today
Get home page data

Method: get
```

---

## Users


```
/api/users
Get all user information

Method: get
```

```
/api/users/updatepwd
Change password

Method: post
Parameters: {
    username: "username",
    new_password: "new_password"
}
```

```
/api/users/updateusergroup
Change user group

Method: post
Parameters: {
    username: "username",
    new_group: "Administrator Group"
}
```

```
/api/users/updateusername
Change username

Method: post
Parameters: {
    old_username: "old_username",
    new_username: "new_username"
}
```

```
/api/users/createuser
Create new user

Method: post
Parameters: {
    new_username: "username",
    password: "password",
    group: "Administrator Group"
}
```

```
/api/users/updateuserstatus
Set whether user is disabled

Method: post
Parameters: {
    username: "username",
    status: false
}
```
---

## User Groups

```
/api/groups
Get all user groups and permission details

Method: get
```

---

## Product Categories

```
/api/warehouse/categories
Get all product categories

Method: get
```

```
/api/warehouse/categories/create
Create new product category

Method: post
Parameters: {
    name: "name",
    parent_name: "parent_name" // Optional
}
```

```
/api/warehouse/categories/updatename
Change product category name

Method: post
Parameters: {
    old_name: "old_name",
    new_name: "new_name"
}
```

```
/api/warehouse/categories/updateparent
Change parent category of subcategory

Method: post
Parameters: {
    name: "name",
    parent_name: "parent_name"
}
```

```
/api/warehouse/categories/delete/:category
Delete category

Method: delete
Parameters: category: "name"

```

---

## Products

```
/api/warehouse/commodity
Get all detailed product information

Method: get
```

```
/api/warehouse/commodity
Get all detailed product information

Method: get
Parameter type: params
Parameters: {
    list: ["category", "category2"].join(",")
}
```

```
/api/warehouse/commodity/create
Create new product

Method: post
Parameters: {
    barcode: "00000068", // Optional
    name: "Green Arrow Chewing Gum",
    category_name: "Candy",
    unit: "g", // Optional
    size: "500", // Optional
    in_price: 1, // Optional
    sale_price: 1.5, // Optional
    vip_points: true, // Optional
    is_delete: false, // Optional
}
```

```
/api/warehouse/commodity/update
Update product information

Method: put
Parameters: {
    current_barcode: "00000068",
    update_value: {
        barcode: "00000068", // Optional
        name: "Green Arrow Chewing Gum", // Optional
        category_name: "Candy", // Optional
        unit: "g", // Optional
        size: "500", // Optional
        in_price: 1, // Optional
        sale_price: 1.5, // Optional
        vip_points: true, // Optional
        is_delete: false, // Optional
    } // Fill in at least one property
}
```

```
/api/warehouse/commodity/delete/:barcode
Delete product

Method: delete
Parameters: barcode: "00000068"
```
---

## Supplier Information

```
/api/warehouse/suppliers
Get all suppliers

Method: get
```

```
/api/warehouse/suppliers/create
Create new supplier

Method: post
Parameters: {
    name: "Wangcai Trading",
    phone: "1008611", // Optional
    description: "Mainly wholesale xxxxxxxx" // Optional
}
```

```
/api/warehouse/suppliers/update
Update supplier information

Method: put
Parameters: {
    name: "Wangcai Trading",
    update_value: {
        new_name: "Big Wangcai Trading", // Optional
        new_phone: "10010", // Optional
        new_description: "Mainly wholesale xxxx" // Optional
    } // Fill in at least one field
}
```

```
/api/warehouse/suppliers/delete/:supplier
Delete supplier

Method: delete
Parameters: supplier: "name"
```

---

## Member Cards

```
/api/vip/members
Get all member information

Method: get
```

```
/api/vip/members/create
Create new member

Method: post
Parameters: {
    code: "0001",
    name: "Ma Dashuai",
    vip_type: "Points Card", // Optional
    sex: "Male", // Optional
    phone: "10086", // Optional
    is_disable: false // Optional
}
```

```
/api/vip/members/update
Update member information

Method: put
Parameters: {
    code: "0001",
    update_value: {
        name: "Ma Dahu", // Optional
        sex: "Male", // Optional
        phone: "10010", // Optional
        is_disable: true // Optional
    } // Fill in at least one field
}
```

```
/api/vip/members/delete/:code
Delete member

Method: delete
Parameters: code: "0001"
```

```
/api/vip/members/change
Member card replacement

Method: post
Parameters: {
    old_code: "0001",
    new_code: "0002",
    description: "Test" // Optional
}
```

```
/api/vip/members/pointrules
Get member card points ratio

Method: get
```

```
/api/vip/members/pointrules
Change member card points ratio

Method: put
Parameters: {
    "value": 100
}
```

```
/api/vip/members/setpoint
Change member card points

Method: put
Parameters: {
	"point": 0.01,
	"type": false,
	"code": "0001"
}
```
---

## Promotional Activities

```
/api/market/promotion
Get all promotional activities

Method: get
```

```
/api/market/promotion/type
Get all promotion types

Method: get
```

```
/api/market/promotion/create
Create promotional activity

Method: post
Parameters: {
    name: "Spring Festival Promotion",
    start_date: 1576030345903,
    end_date: 1576030345904,
    description: "On the occasion of the upcoming Spring Festival....", // Optional
    is_disable: false // Optional
}
```

```
/api/market/promotion/update
Update promotional activity time, name, description, etc.

Method: put
Parameters: {
    name: "Spring Festival Promotion",
    update_value: {
        new_name: "National Day Promotion", // Optional
        start_date: 1576030345906, // Optional
        end_date: 1576030345909, // Optional
        description: "Some promotion description xxxx", // Optional
        is_disable: true // Optional
    } // Fill in at least one field
}
```

```
/api/market/promotion/commodity
Add products to promotional activity

Method: post
Parameters: {
	"promotion_name": "Spring Festival Promotion",
	"commodity": 
		{
			"barcode": "0001",
			"promotion_type": "Single Item Special Price",
			"discount_value": 12.3
		}	
}
```

```
/api/market/promotion/commodity/:name
Get products participating in promotional activity

Method: get
Parameters: name: "name"
```

```
/api/market/promotion/commodity
Remove products from promotional activity

Method: delete
Parameter type: Params
Parameters: {
    name: "Spring Festival Promotion",
    barcode: "00001"
}
```

```
/api/market/promotion/delete/:name
Delete promotional activity

Method: delete
Parameters: name: "Spring Festival Promotion"
```

```
/api/market/promotion/details
Set details of products participating in promotional activity

Method: post
Parameters: {
	"promotion_name": "Spring Festival Promotion",
	"barcode": "0001",
	"update_value": {
		"promotion_type": "Single Item Special Price",
		"discount_value": 30
	}
}
```

---

## Warehouse - Purchase Orders

```
/api/warehouse/stock
Get all purchase orders

Method: get
```

```
/api/warehouse/stock/:query
Get purchase order details

Method: get
Parameters: query = Purchase order number (timestamp)
```

```
/api/warehouse/stock/create
Create purchase order

Method: post
Parameters: {
    supplier_name: "Default Supplier",
    description: "New Year stock up", // Optional
    commodity_list: [
        {
            barcode: "69019388",
            count: "12 packs*10 strips",
            in_price: 12
        },
        {
            barcode: "6954432710645",
            count: "1 box*10 bottles",
            in_price: 80
        }
    ]
}
```

---

## Frontend - Submit Order

```
/api/front/commodity/:query
Query product information

Method: get
Parameters: query Value used for query
```

```
/api/front/vip/:query
Query member information

Method: get
Parameters: query Value used for query
```

```
/api/front/order/:id
Get order details

Method: get
Parameters: id, Order number
```

```
/api/front/order/submit
Submit order

Method: post
Parameters: {
    "pay_type": "Cash",
    "client_pay": 30,
    "change": 9,
    "origin_price": 22,
    "sale_price": 21,
    "commodity_list": [
        {
            "barcode": "0001",
            "origin_price": 10,
            "sale_price": 9,
            "count": 1,
            "status": "Promotion"
        },
        {
            "barcode": "6931956000223",
            "origin_price": 12,
            "sale_price": 12,
            "count": 1,
            "status": "Sale"
        }
    ],
    "count": 2
}
```

```
/api/front/order
Get all information of today's completed orders

Method: get
```

```
/api/front/order/undo
Cancel completed order

Method: put
Parameters: {
	"order_id": 191215223810018
}
```

```
/api/front/order/addvip
Add order points for member

Method: put
Parameters: {
	"order_id": 191215212540017,
	"vip_code": "0005"
}
```

---

## Data

```
/api/data/import/commodity
Import product data

Method: post
Parameters: {
    "rules": {
        "barcode_exist": false,
        "category_exist": false,
        "supplier_exist": false
    },
    "data": [
        {
        	"barcode": "00001",
            "name": "sda Small Beads",
            "category_name": "Toys",
            "in_price": 17.5,
            "sale_price": 112,
            "unit": "Bottle",
            "size": "500G",
            "is_delete": false,
            "vip_points": true
        }
    ]
}
```

```
/api/data/export
Export (sales|products|members) data

Method: get
Parameter type: params
Parameters: {
    type: "sales" || "commodity" || "vip"
}
```

---

## Data Reports

```
/api/statistics/orders
Query orders within a specific time range

Method: get
Parameter type: params
Parameters: {
    start_time: 1582888786729,
    end_time: 1682888786729
}
```

```
/api/statistics/orders/:id
Query detailed information of a specific order

Method: get
Parameter type: params
Parameters: id: 200228887860001
```

```
/api/statistics/orders/query
Query related orders and products by time range and query type

Method: get
Parameter type: params
Parameters: {
    start_time: 1582888786729,
    end_time: 1682888786729,
    query: "daw",
    type: "name" || "barcode"
}
```

```
/api/statistics/proportion
Query product sales category proportions within a time range

Method: get
Parameter type: params
Parameters: {
    start_time: 1582888786729,
    end_time: 1682888786729,
    type: "category$Meat & Eggs" || "category$all" || "vip" || "pos_user" || "pay_type" || "supplier"
}
```

```
/api/statistics/trends
Query store sales trends

Method: get
Parameter type: params
Parameters: {
    start_time: 1582888786729,
    end_time: 1682888786729,
    type: "hour" || "day" || "month"
}
```

---

## Store Settings

```
/api/store/name
Update store name

Method: put
Parameters: {
	"name": "XiaoMu Mall"
}
```

```
/api/store/name
Get store name

Method: get
```