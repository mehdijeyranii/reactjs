import ProductTable from "./products/ProductTable";

function App() {
    const products = [
        {
            id: 1,
            name: "Asus Laptop",
            category: "Electronics",
            stock: 5,
            price: 20000000,
        },
        {
            id: 2,
            name: "iPhone 13",
            category: "Mobile",
            stock: 0,
            price: 35000000,
        },
        {
            id: 3,
            name: "Samsung TV",
            category: "Electronics",
            stock: 2,
            price: 18000000,
        },
        {
            id: 4,
            name: "Sony Headphones",
            category: "Audio & Video",
            stock: 7,
            price: 1500000,
        },
        {
            id: 5,
            name: "Samsung Tablet",
            category: "Mobile",
            stock: 4,
            price: 8000000,
        },
        {
            id: 6,
            name: "Nikon Camera",
            category: "Camera",
            stock: 0,
            price: 12000000,
        },
        {
            id: 7,
            name: "Xiaomi Smartwatch",
            category: "Watches",
            stock: 3,
            price: 3000000,
        },
        {
            id: 8,
            name: "JBL Bluetooth Speaker",
            category: "Audio & Video",
            stock: 10,
            price: 1800000,
        },
        {
            id: 9,
            name: "Mechanical Keyboard",
            category: "Computer Accessories",
            stock: 8,
            price: 900000,
        },
        {
            id: 10,
            name: "HP Printer",
            category: "Office Equipment",
            stock: 1,
            price: 4000000,
        },
    ];

    return (
        <div>
            <h2>Product Table</h2>
            <ProductTable products={products} />
        </div>
    );
}

export default App;
