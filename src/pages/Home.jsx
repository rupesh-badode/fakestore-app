import React, { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    console.log(products);
    

    return (
        <div style={{ padding: "20px" }}>
            <h2>All Products</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {products.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            width: "250px",
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "10px",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "100%", height: "200px", objectFit: "contain" }}
                        />

                        <h4>{item.title.slice(0, 40)}...</h4>
                        <p>₹ {item.price}</p>
                        <p>⭐ {item.rating?.rate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;