import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import { makeStyles } from "@material-ui/core/styles";
import dateTransformer from "../helpers/dateTransformer";
import CommentIcon from "@material-ui/icons/Comment";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => {
  return {
    open: {
      color: theme.palette.success.main,
    },
    primary: {
      color: theme.palette.grey[900],
    },
    closed: {
      color: theme.palette.error.main,
    },
  };
});
const IssueItem = ({ node }) => {
  const classes = useStyles();
  console.log(classes);
  return (
    <ListItem>
      <ListItemAvatar>
        <InfoIcon
          className={node.state === "OPEN" ? classes.open : classes.closed}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography className={classes.primary}> {node.title} </Typography>
        }
        secondary={
          <>
            {`#  ${node.number}`}
            <Typography component="span" variant="body2">
              {` opened on ${dateTransformer(node.createdAt)} by ${
                node.author.name
              }`}
            </Typography>
          </>
        }
      />
      {node.comments.totalCount > 0 && (
        <Badge badgeContent={node.comments.totalCount} color="primary">
          <CommentIcon color="disabled" />
        </Badge>
      )}
    </ListItem>
  );
};
export default IssueItem;
