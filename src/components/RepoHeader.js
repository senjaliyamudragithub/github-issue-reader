import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import NotFound from "./NotFound";
import Loader from "./Loader";
import { REPOSITORY_INFO } from "../query/repositoryInfoQuery";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  secondary: {
    color: "#516270",
  },
  badge: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    backgroundColor: theme.palette.grey[100],
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  item: {
    marginLeft: theme.spacing(3),
  },
}));

const RepoHeader = ({ children }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(REPOSITORY_INFO);
  if (error) return <NotFound />;
  if (loading || !data) return <Loader />;
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={10}>
          <Typography variant="h4">{data.repository.name}</Typography>
          <Typography className={classes.secondary}>
            {data.repository.description}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.badge}>
          <StarIcon />
          <Typography className={classes.secondary}>
            {data.repository.stargazers.totalCount}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.badge}>
          <VisibilityIcon />
          <Typography className={classes.secondary}>
            {data.repository.watchers.totalCount}
          </Typography>
        </Grid>
      </Grid>
      {children}
    </>
  );
};
export default RepoHeader;
