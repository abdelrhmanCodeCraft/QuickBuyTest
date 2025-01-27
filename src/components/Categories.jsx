import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../store/DataSlice";
import { Link } from 'react-router-dom';
import '../style/components/categories.css';

const Categories = () => {
    const { items, loading, error } = useSelector((state) => state.data);
    const dispatch = useDispatch(); 

    const apiUrl = `https:/example.com`; 

    useEffect(() => {
        dispatch(fetchData(apiUrl));
    }, [dispatch]);

    return (
        <div className="category">
            <div className="container">
                <h1>our categories</h1>
                <div className="content">
                    {loading && <div className="loader"></div>}
                    {error && <p>Error: {error}</p>}
                    {items?.map((item) => (
                        <div key={item.id}>
                            <Link to={`/categories/${item.id}`}>
                                <div className="image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h2>{item.name}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;
