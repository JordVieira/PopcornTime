import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CardReview({ title, image, review, rating }) {
  return (
    <Card sx={{ display: "flex", flexDirection: "row" }}>
      <CardMedia
        component="img"
        sx={{
          padding: "5px",
          height: "auto",
          maxWidth: "6rem",
          objectFit: "cover",
        }}
        image={image}
        alt={title}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "0.5rem",
          }}
        >
          <Typography variant="h6" marginRight={"0.5rem"}>
            {title}
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
        <Typography>{review}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "0.5rem",
          }}
        >
          <FavoriteIcon color="disabled" />
          <Typography
            variant="subtitle1"
            color="GrayText"
            marginLeft={"0.5rem"}
          >
            {rating * Math.floor(Math.random() * 10)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
