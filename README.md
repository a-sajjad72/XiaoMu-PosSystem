# XiaoMu-PosSystem
Small supermarket POS system, including frontend and backend.

# 2021/08/16 11:38:00
A complete rewrite is planned for the near future, work in progress...

## Demo

Online demo available at: [http://47.100.173.231:44444](http://47.100.173.231:44444)

Default username/password: admin / password

## Structure

The server and client are packaged together. During normal usage, when the software opens the client, it will silently start the server in the background.

When there are multiple POS machines in a LAN, one can act as the server while others act as clients.

Create an empty `.noserver` file in the software root directory to disable server startup. After opening the client, modify the server address in the login interface.

Open `powershell` and execute the following command:

```
echo "" > .noserver
```

## Documentation

Server API documentation: [API Documentation](./server/doc/API.md)

Build documentation: [Build Documentation](./build.md)

## Frontend Sales

- ✅ Fuzzy product search
- ✅ Suspend/retrieve orders
- ✅ View/cancel historical orders
- ✅ Submit orders
- ✅ Member points
- ✅ Modify product price/quantity
- ❌ Parse bulk item barcodes
- ❌ Customer display communication
- ❌ Cash drawer communication
- ❌ Receipt printing

## Backend Management

- ✅ Create/delete suppliers
- ✅ Create/delete product categories
- ✅ Create/delete/disable products
- ❌ Product price tag printing
- ❌ Electronic scale communication
- ✅ Create/delete promotional activities
- ✅ Create/delete/disable members
- ✅ Create purchase orders
- ✅ Create/disable/modify administrators (cashiers)
- ✅ Historical order query/analysis
- ✅ Import product data
- ✅ Export product/sales/member data
- ✅ Store name modification


## Hardware

Due to lack of available devices, hardware communication is temporarily on hold. Electronic scale integration is only done with Dahua electronic scales.
