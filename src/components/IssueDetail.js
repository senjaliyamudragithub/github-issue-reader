import { useQuery } from "@apollo/client";
import CommentContainer from "./CommentContainer";
import Loader from "./Loader";
import NotFound from "./NotFound";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import dateTransformer from "../helpers/dateTransformer";
import { ISSUE_DETAIL_QUERY } from "../query/issueDetailInfoQuery";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 10%",
  },
  header: {
    paddingTop: "1%",
  },
}));

const IssueDetail = (props) => {
  const classes = useStyles();
  const issueNumber = props.match.params.id;
  const { loading, error, data } = useQuery(ISSUE_DETAIL_QUERY, {
    variables: { number: Number(issueNumber), after: null },
  });

  if (error) return <NotFound />;
  if (loading || !data) return <Loader />;

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.header}>
        {data.repository.issue.title} #{issueNumber}
      </Typography>
      <Typography variant="subtitle1">
        {data.repository.issue.author.name} opened this issue
        {dateTransformer(data.repository.issue.createdAt)}
        {data.repository.issue.comments.totalCount} comments
      </Typography>
      <CommentContainer commentList={data.repository.issue.comments.edges} />
    </div>
  );
};
export default IssueDetail;
