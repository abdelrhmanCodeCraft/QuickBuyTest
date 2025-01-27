// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../store/DataSlice";
// import { Link } from "react-router-dom";
// import "../style/pages/shop.css";

// const Shop = () => {
//   const dispatch = useDispatch();
//   const { items, loading, error } = useSelector((state) => state.data);

//   const apiUrl = `https://demo-testing.instakit.app/api/v1/categories`;

//   useEffect(() => {
//     dispatch(fetchData(apiUrl));
//   }, [dispatch]);

//   return (
//     <div className="shop">
//       <h1>Shop</h1>
//       {loading && <p className="loder"></p>}
//       {error && <p>Error: {error}</p>}
//       <div className="categories">
//         {items.map((category) => (
//           <div key={category.id} className="category">
//             {/* <h2>{category.name}</h2> */}
//             <div className="sub-categories">
//               {category.sub_categories?.map((subCategory) => (
//                 <Link
//                   to={`/product/${subCategory.id}`}
//                   key={subCategory.id}
//                   className="sub-category-item"
//                 >
//                   <div className="sub-category">
//                     <img
//                       style={{ width: "20rem" }}
//                       src={subCategory.image}
//                       alt={subCategory.name}
//                     />
//                     <h3>{subCategory.name}</h3>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;
