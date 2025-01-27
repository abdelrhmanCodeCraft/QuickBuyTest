import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../store/DataSlice"; 
import { Link, useParams } from 'react-router-dom';
import '../style/components/productsCategories.css';
import meatCat from '../image/meat.jpeg';

const ProductsCategories = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch(); 
    const { items, loading, error } = useSelector((state) => state.data);

    const apiUrl = `https:/example.com`; 

    useEffect(() => {
        dispatch(fetchData(apiUrl));
    }, [dispatch]);

    const selectedCategory = items.find(category => category.id.toString() === id);

    const highlightKeywords = (text) => {
        const keywords = ["cook", "Eat", "Meat"]; 
        let highlightedText = text;

        keywords.forEach(keyword => {
            const regex = new RegExp(`(${keyword})`, 'gi');
            highlightedText = highlightedText.replace(regex, `<span style="color: red;">$1</span>`);
        });

        return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    return (
        <div className="products-categories">
            <div className="image">
                <img src={meatCat} alt="" />
            </div>
            <div className="container">
                <div className="content">
                    {error && <p>Error: {error}</p>}
                    {selectedCategory ? (
                        <div>
                            <div className="text">
                                <h1>{highlightKeywords(selectedCategory.name)}</h1>
                            </div>
                            <div className="products">
                                {selectedCategory.sub_categories?.map((product) => (
                                    <Link to={`/products/${product.id}`} key={product.id} className="product-item">
                                        <div className="img">
                                            <img src={product.image} alt={product.name}  />
                                        </div>
                                        <h3>{product.name}</h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div style={{marginTop:"5rem"}} className="loader"></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductsCategories;
