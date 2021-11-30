import {InstantSearch, SearchBox, Hits} from 'react-instantsearch-dom';
import searchClient from "../lib/algolia";

const Search = () => (
    <InstantSearch searchClient={searchClient} indexName="products">
        <SearchBox />
        <Hits hitComponent={Hit} />
    </InstantSearch>
);
const Hit =({hit}) => {
    return (
        <article>
            <p>{hit.firstname}</p>
        </article>
    );
}

export default Search;
