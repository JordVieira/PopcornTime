import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

export default function CardSerie({title, image}) {
  return (
    <Card>
      <CardHeader
        title={<Typography fontWeight="bold">{title}</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
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
  );
}
