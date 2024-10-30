import PropTypes from "prop-types";
import "./products.css";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";

const ProductTable = ({ products }) => {
    return (
        <table className="table">
            <ProductTableHeader />
            <tbody>
                {products.map((product, index) => (
                    <ProductTableRow
                        key={product.id}
                        style={{
                            backgroundColor:
                                index % 2 == 0 ? "#f5f5f5" : "#fff",
                        }}
                        product={product}
                    />
                ))}
            </tbody>
        </table>
    );
};

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductTable;
