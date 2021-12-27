import { Paper, FormControlLabel, Checkbox, Grid, Typography, List, ListItem } from "@mui/material";

export default function RefinementList({ items, refine }) {
  return (
    <Grid item xs={2}>
      <Paper sx={{ p: 1 }}>
        <List>
          {items.map((item) => (
            <ListItem key={item.label}>
              <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item>
                  <FormControlLabel label={item.label} control={<Checkbox onClick={() => refine(item.value)} />} />
                </Grid>
                <Grid item>
                  <Typography variant="p">({item.count})</Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
}
