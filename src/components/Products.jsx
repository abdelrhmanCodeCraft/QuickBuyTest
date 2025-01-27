import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../style/components/product.css";
import beef from "../image/Premium Photo _ Raw beef steak on a chopping Board_ Organic farm meat background.jpeg";
import { GoHeart } from "react-icons/go";
import { addToSave, addToCart } from "../store/DataSlice";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
import { RiSearchLine } from "react-icons/ri";
import "../style/pages/shop.css";

const Products = () => {
  const { id } = useParams();
  const { items, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [disabledButtons, setDisabledButtons] = useState({});
  const [disabledHearts, setDisabledHearts] = useState({});
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");

  useEffect(() => {
    if (items?.length > 0) {
      setSelectedSubCategory(items[0]?.sub_categories[0]?.id.toString());
    }
  }, [items]);

  console.log(items);

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const subCategories = items?.flatMap((item) => item.sub_categories) || [];
  const filteredProducts =
    selectedSubCategory === ""
      ? []
      : subCategories.find((sub) => sub.id.toString() === selectedSubCategory)
          ?.products || [];

  const searchFilteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...searchFilteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "priceAsc":
        return a.final_display_price - b.final_display_price;
      case "priceDesc":
        return b.final_display_price - a.final_display_price;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleAddToSave = (product) => {
    if (!disabledHearts[product.id]) {
      dispatch(addToSave(product));
      // toast.success(`${product.name} added to wishlist`);
      setDisabledHearts((prev) => ({ ...prev, [product.id]: true }));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    if (!disabledButtons[product.id]) {
      setDisabledButtons((prev) => ({ ...prev, [product.id]: true }));
    }
  };

  return (
    <div className="product">
      <div className="image">
        <img src={beef} alt="" />
      </div>
      <div className="container">
        <div className="text">
          <h1>Products</h1>
        </div>

        <div className="shop-head">
          <div className="dropdown">
            <label htmlFor="subCategory">category</label>
            <select
              id="subCategory"
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
            >
              {subCategories.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <RiSearchLine />
          </div>

          <div className="sort-options">
            <label htmlFor="sortOption">Sort by </label>
            <select
              id="sortOption"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="priceAsc">Price (Low to High)</option>
              <option value="priceDesc">Price (High to Low)</option>
            </select>
          </div>
        </div>

        <div className="content">
          {loading && <div className="loader"></div>}
          {error && <p>Error: {error}</p>}

          {sortedProducts.length > 0 ? (
            <div className="products">
              {sortedProducts.map((product) => (
                <div className="room" key={product.id}>
                  <Link to={`singleProduct/${product.id}`}>
                    <div className="img">
                      <img
                        src={product.thumbnail}
                        alt={product.name.slice(0, 15)}
                      />
                    </div>
                  </Link>
                  <h3>{product.name.slice(0, 25)}...</h3>
                  <p>1/2 kilo</p>
                  <div className="foot">
                    <h4>{product.final_display_price} EGP</h4>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={disabledButtons[product.id]}
                    >
                      Add
                    </button>
                  </div>
                  <div className="heart-content">
                    <GoHeart
                      className="heart"
                      onClick={() => handleAddToSave(product)}
                      style={{
                        cursor: disabledHearts[product.id]
                          ? "not-allowed"
                          : "pointer",
                      }}
                      color={disabledHearts[product.id] ? "gray" : "red"}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            sortedProducts.length === 0 &&
            !loading && (
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  fontWeight: "bold",
                }}
              >
                No products found for this search.
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
