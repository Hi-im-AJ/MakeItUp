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
      <Grid item xs>
        <Grid container spacing={5}>
          {hits.map((hit) => (
            <Grid item key={hit.objectID} xs={12} sm={6} md={4} lg={3}>
              <Hit hit={hit} />
            </Grid>
          ))}
          <ListItem className="ais-InfiniteHits-sentinel" ref={(c) => (this.sentinel = c)} />
        </Grid>
      </Grid>
    );
  }
}

export default connectInfiniteHits(InfiniteHits);
