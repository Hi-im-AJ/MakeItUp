import { InstantSearch, SearchBox, Hits, HitsPerPage, Pagination, RefinementList } from "react-instantsearch-dom";
import searchClient from "../lib/algolia";
import Hit from "./Hit";

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="products">
    {/* <RefinementList attribute="firstname" operator="and" searchable={true} /> */}
    <SearchBox
      translations={{
        submitTitle: "Submit your search query.",
        resetTitle: "Clear your search query.",
        placeholder: "Search...",
      }}
    />
    <Hits hitComponent={Hit} />
    <HitsPerPage
      defaultRefinement={5}
      items={[
        { value: 1, label: "Show 1 hits" },
        { value: 5, label: "Show 5 hits" },
      ]}
    />
    {/* <Pagination /> */}
  </InstantSearch>
);

export default Search;
