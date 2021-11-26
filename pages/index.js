import commerce from "../lib/commerce";
import React from "react";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import Link from "next/link";
import Search from "../components/Search";

export async function getServerSideProps() {
    const merchant = await commerce.merchants.about();
    const { data: categories } = await commerce.categories.list();
    const { data: products } = await commerce.products.list();
    return {
        props: {
            merchant,
            categories,
            products,
        },
    };
}

export default function IndexPage({ merchant, categories, products }) {
    return (
        <React.Fragment>
            <h1>{merchant.data[0].name}</h1>
            <Search/>
            <h3>
                <Link href="/categories">
                    <a>Categories</a>
                </Link>
            </h3>

            <CategoryList categories={categories} />

            <h3>
                <Link href="/products">
                    <a>Products</a>
                </Link>
            </h3>

            <ProductList products={products} />
        </React.Fragment>
    );
}