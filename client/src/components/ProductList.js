import React, { useContext } from "react";
import { InstantSearch, SearchBox, Hits, HitsPerPage, Pagination /*RefinementList*/ } from "react-instantsearch-dom";
import searchClient from "../lib/algolia";
import Hit from "./Hit";
import ProductContext from "../context/product/ProductContext";

const ProductList = () => {
  const { search_input } = useContext(ProductContext);
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      {/* <RefinementList attribute="firstname" operator="and" searchable={true} /> */}
      <div style={{ display: "none" }}>
        <SearchBox
          defaultRefinement={search_input}
          translations={{
            submitTitle: "Submit your search query.",
            resetTitle: "Clear your search query.",
            placeholder: "Search...",
          }}
        />
      </div>
      <Hits hitComponent={Hit} />
      <HitsPerPage
        defaultRefinement={5}
        items={[
          { value: 1, label: "Show 1 hits" },
          { value: 5, label: "Show 5 hits" },
        ]}
      />
      <Pagination />
    </InstantSearch>
  );
};

export default ProductList;
