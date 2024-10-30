import PropTypes from "prop-types";
import "./products.css";

const ProductTableRow = ({ product, style }) => {
    return (
        <tr style={style}>
            <td className="table-body">{product.id}</td>
            <td className="table-body">{product.name}</td>
            <td className="table-body">{product.category}</td>
            <td
                className="table-body"
                style={{
                    color: product.stock == 0 ? "white" : "black",
                    backgroundColor: product.stock == 0 ? "red" : "transparent",
                }}
            >
                {product.stock == 0 ? "Not available" : product.stock}
            </td>
            <td className="table-body">{product.price}</td>
        </tr>
    );
};

ProductTableRow.propTypes = {
    product: PropTypes.object.isRequired,
    style: PropTypes.object,
};

export default ProductTableRow;
