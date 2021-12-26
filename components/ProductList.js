import { useContext } from "react";
import { InstantSearch, SearchBox, HitsPerPage, SortBy } from "react-instantsearch-dom";
import searchClient from "../lib/algolia";
import SearchContext from "../context/search/SearchContext";
import InfiniteHits from "./InfiniteHits";
import RefinementList from "../components/RefinementList";
import { Grid } from "@mui/material";
import { connectRefinementList } from "react-instantsearch-dom";
const CustomRefinementList = connectRefinementList(RefinementList);

export default function () {
  const { searchInput } = useContext(SearchContext);

  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <Grid container spacing={4}>
        <CustomRefinementList
          attribute="categories.name"
          operator="and"
          transformItems={(items) =>
            items.map((item) => ({
              ...item,
              count: item.count,
            }))
          }
        />
        <Grid item xs>
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
          <SortBy
            defaultRefinement="products"
            items={[
              { value: "product_price_asc", label: "By lower price first" },
              { value: "product_price_desc", label: "By higher price first" },
              { value: "products", label: "By relevance" },
            ]}
          />

          <InfiniteHits minHitsPerPage={2} />

          <div style={{ display: "none" }}>
            <HitsPerPage
              defaultRefinement={12}
              items={[
                { value: 1, label: "Show 1 hits" },
                { value: 5, label: "Show 5 hits" },
              ]}
            />
          </div>
        </Grid>
      </Grid>
    </InstantSearch>
  );
}
