import {
  AppBar,
  Container,
  Grid,
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Rating,
  CardHeader,
  Typography
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./estilo.css";

export default function Inicial() {
  return (
    <div className="root">
      <AppBar
        style={{ backgroundColor: "#363636", padding: "5px" }}
        postition="static"
      >
        <Container maxWidth="x1">
          <Logo style={{ height: "30px" }} />
        </Container>
      </AppBar>
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "0 50px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Card>
              <CardHeader title="Stranger Things"></CardHeader>
              <CardMedia
                component="img"
                height="194"
                image="https://pbs.twimg.com/media/FSkCESUWYAAThYb?format=jpg&name=900x900"
                alt="Stranger Things"
              />
              <CardActions
                disableSpacing
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Rating name="simple-controlled" value={0} />

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card>
              <CardMedia
                component="img"
                height="194"
                image="https://pbs.twimg.com/media/FSkCESUWYAAThYb?format=jpg&name=900x900"
                alt="Stranger Things"
              />
              <CardActions
                disableSpacing
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Rating name="simple-controlled" value={0} />

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card>
              <CardMedia
                component="img"
                height="194"
                image="https://pbs.twimg.com/media/FSkCESUWYAAThYb?format=jpg&name=900x900"
                alt="Stranger Things"
              />
              <CardActions
                disableSpacing
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Rating name="simple-controlled" value={0} />

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card>
              <CardMedia
                component="img"
                height="194"
                image="https://pbs.twimg.com/media/FSkCESUWYAAThYb?format=jpg&name=900x900"
                alt="Stranger Things"
              />
              <CardActions
                disableSpacing
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Rating name="simple-controlled" value={0} />

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card>
              <CardMedia
                component="img"
                height="194"
                image="https://pbs.twimg.com/media/FSkCESUWYAAThYb?format=jpg&name=900x900"
                alt="Stranger Things"
              />
              <CardActions
                disableSpacing
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Rating name="simple-controlled" value={0} />

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card>
              <CardMedia
                component="img"
                height="194"
                image="https://pbs.twimg.com/media/FSkCESUWYAAThYb?format=jpg&name=900x900"
                alt="Stranger Things"
              />
              <CardActions
                disableSpacing
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Rating name="simple-controlled" value={0} />

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
