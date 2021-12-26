import { Component } from "react";
import { connectInfiniteHits } from "react-instantsearch-dom";
import Hit from "./Hit";
import { Grid, List, ListItem } from "@mui/material";

class InfiniteHits extends Component {
  sentinel = null;

  onSentinelIntersection = (entries) => {
    const { hasMore, refineNext } = this.props;

    entries.forEach((entry) => {
      if (entry.isIntersecting && hasMore) {
        // In that case we can refine
        refineNext();
      }
    });
  };

  componentDidMount() {
    //Observeren bliver tilkoblet, når komponentet bliver rendered
    this.observer = new IntersectionObserver(this.onSentinelIntersection);

    this.observer.observe(this.sentinel);
  }
  componentWillUnmount() {
    //Observeren bliver afkoblet når komponentet bliver slettet
    this.observer.disconnect();
  }

  render() {
    const { hits } = this.props;

    return (
      <Grid item>
        <List className="ais-InfiniteHits-list">
          {hits.map((hit) => (
            <ListItem key={hit.objectID} className="ais-InfiniteHits-item">
              <Hit hit={hit} />
            </ListItem>
          ))}
          <ListItem className="ais-InfiniteHits-sentinel" ref={(c) => (this.sentinel = c)} />
        </List>
      </Grid>
    );
  }
}

export default connectInfiniteHits(InfiniteHits);
