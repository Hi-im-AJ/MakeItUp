import React, { useContext } from "react";
import { InstantSearch, SearchBox, Hits, HitsPerPage, Pagination, RefinementList } from "react-instantsearch-dom";
import searchClient from "../lib/algolia";
import Hit from "./Hit";
import GlobalContext from "../context/GlobalContext";

const ProductList = () => {
  const { searchInput } = useContext(GlobalContext);
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <div id="productList">
        <div id="refinementContainer">
          <RefinementList
            attribute="categories.name"
            operator="and"
            transformItems={(items) =>
              items.map((item) => ({
                ...item,
                count: `(${item.count})`,
              }))
            }
          />
        </div>
        <div>
          <div style={{ display: "none" }}>
            <SearchBox
              defaultRefinement={searchInput}
              translations={{
                submitTitle: "Submit your search query.",
                resetTitle: "Clear your search query.",
                placeholder: "Search...",
              }}
            />
          </div>
          <Hits hitComponent={Hit} />
          <div style={{ display: "none" }}>
            <HitsPerPage
              defaultRefinement={5}
              items={[
                { value: 1, label: "Show 1 hits" },
                { value: 5, label: "Show 5 hits" },
              ]}
            />
          </div>
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  );
};

export default ProductList;
