import "./products.css";

const ProductTableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="table-header">ID</th>
                <th className="table-header">Name</th>
                <th className="table-header">Category</th>
                <th className="table-header">Stock</th>
                <th className="table-header">Price</th>
            </tr>
        </thead>
    );
};

export default ProductTableHeader;
