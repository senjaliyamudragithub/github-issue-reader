import React from "react";
import TextField from "@material-ui/core/TextField";
import { useLazyQuery } from "@apollo/client";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import IssueList from "./IssueList";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Loader from "./Loader";
import { SEARCH_ISSUE_QUERY } from "../query/searchIssueQuery";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginRight: theme.spacing(1),
    width: "50%",
  },
  main: {
    marginLeft: "15%",
    marginTop: theme.spacing(3),
    alignItems: "center",
  },
}));
const formQueryString = (searchField, status) =>
  `${searchField} repo:facebook/react in:title in:body type:issue state:${status}`;

export default function SearchContainer() {
  const classes = useStyles();
  const [searchField, setSearchField] = React.useState("");
  const [value, setValue] = React.useState("open");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [loadResult, { loading, data }] = useLazyQuery(SEARCH_ISSUE_QUERY);

  return (
    <>
      <main className={classes.main}>
        <TextField
          id="outlined-full-width"
          label="Search Issue"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          placeholder="Search here"
          className={classes.textField}
          variant="outlined"
        />
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="status"
            name="status"
            value={value}
            onChange={handleChange}
            style={{ flexDirection: "row" }}
          >
            <FormControlLabel
              value="open"
              control={<Radio color="default" />}
              label="Open"
            />
            <FormControlLabel
              value="closed"
              control={<Radio color="default" />}
              label="Closed"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          onClick={() =>
            loadResult({
              variables: { query: formQueryString(searchField, value) },
            })
          }
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </main>
      {loading && <Loader />}
      {data && data.search.edges.length > 0 && (
        <IssueList list={data.search.edges} />
      )}
    </>
  );
}
