import "./Products.scss";
import Product from "./Product/Product"
const Products = ({products, innerPage ,headingText }) => {
    return  <div className="products-container" id="myproduct">
   {!innerPage && <div className="sec-heading">{headingText}</div>}
    <div className="products" >
        {products && products.data.map((item) => (
       
              <Product 
                 data={item.attributes} 
                 key={item.id} 
                 id={item.id}              
              />
        ))}
              
    </div>
</div>;
};

export default Products;

