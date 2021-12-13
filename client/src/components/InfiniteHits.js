import React, { Component } from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import Hit from './Hit';

class InfiniteHits extends Component {
    sentinel = null;

    onSentinelIntersection = entries => {
        const { hasMore, refineNext } = this.props;

        entries.forEach(entry => {
            if (entry.isIntersecting && hasMore) {
                // In that case we can refine
                refineNext();
            }
        });
    }

    componentDidMount() { //Observeren bliver tilkoblet, når komponentet bliver rendered
        this.observer = new IntersectionObserver(this.onSentinelIntersection);

        this.observer.observe(this.sentinel);
    }
    componentWillUnmount() {  //Observeren bliver afkoblet når komponentet bliver slettet
        this.observer.disconnect();
    }


    render() {
        const { hits } = this.props;


        return (
            <div className="ais-InfiniteHits">
                <ul className="ais-InfiniteHits-list">
                    {hits.map(hit => (
                        <li key={hit.objectID} className="ais-InfiniteHits-item">
                            <Hit hit={hit} />
                        </li>
                    ))}
                    <li
                        className="ais-InfiniteHits-sentinel"
                        ref={c => (this.sentinel = c)}
                    />
                </ul>
            </div>
        );
    }
}

export default connectInfiniteHits(InfiniteHits);
