import {useNavigate} from 'react-router-dom'

import "./Category.scss";

const Category = ({categories}) => {
     const navigate = useNavigate();
    return (
      <div className="shop-by-category" id='mycategory'>
        <div className="categories" >        
          {categories && categories.data.map((item) =>(
           <div key={item.id} className="category" 
           onClick={()=>navigate(`/category/${item.id}`)}>
           <img 
            src={
            process.env.REACT_APP_ABHAY_URL + 
            item.attributes.img.data.attributes.url
            }
            alt=""
           />
          </div>
          ))}
              {/* {categories.data.map((categorie) => (
    <div item key={categorie.id} className="category" >
              <img 
            src={
            process.env.REACT_APP_ABHAY_URL + 
            categorie.attributes.img.data.attributes.url
            }
            alt=""
           />
            <Category categorie={categorie}/>
            </div>
               ))} */}

       </div>
      </div>
    );
};

export default Category;



