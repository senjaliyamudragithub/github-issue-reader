import IssueItem from "./IssueItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  link: {
    textDecoration: "none",
  },
}));

const IssueList = ({ list }) => {
  const validatedList = list.filter(({ node }) => node.state);
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {validatedList.map(({ node }) => (
        <Link
          key={node.id}
          to={`/issue/${node.number}`}
          className={classes.link}
        >
          <IssueItem node={node} />
        </Link>
      ))}
    </List>
  );
};
export default IssueList;
