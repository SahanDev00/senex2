import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Products = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios.get(`/api/products/${categoryId}`)
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
                setError('Failed to load products.');
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="products">
            <h1 className='font-poppins text-black'>Products in Category {categoryId}</h1>
            {products.length === 0 ? (
                <p>No products available in this category.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-poppins">
                    {products.map(product => (
                        <div key={product.id} className="product-card p-4 bg-white shadow-md">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="text-xl font-bold">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
