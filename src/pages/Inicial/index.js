import {
  Grid,
  IconButton,
  Autocomplete,
  TextField,
  Paper,
  Divider,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardSerie from "../../components/CardSerie";
import Header from "../../components/Header";
import "./estilo.css";

const series = [
  {
    title: "A Roda do Tempo",
    image:
      "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/10/arodatempo-wheeloftime-poster2.jpg",
    year: 2021,
  },
  // { title: "Euphoria", image:"https://br.web.img3.acsta.net/pictures/22/03/10/15/32/5564716.jpg", year: 2019 },
  {
    title: "Lupin",
    image: "https://br.web.img3.acsta.net/pictures/20/12/02/16/22/0450183.jpg",
    year: 2021,
  },
  // { title: "Moon Knight", image:"https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg", year: 2022 },
  {
    title: "Obi-Wan Kenobi",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/obi-wan_kenobi_poster_60ba8b0f.jpeg",
    year: 2022,
  },
  {
    title: "Ruptura",
    image:
      "https://i2.wp.com/soundtracksscoresandmore.com/wp-content/uploads/2022/02/severance_600.jpg",
    year: 2022,
  },
  {
    title: "Stranger Things",
    image:
      "https://pbs.twimg.com/media/FSkCESUWYAAThYb?format=jpg&name=900x900",
    year: 1994,
  },
  {
    title: "WandaVision",
    image:
      "https://img.elo7.com.br/product/original/3816CC2/big-poster-serie-wandavision-lo001-cartaz.jpg",
    year: 2022,
  },
];

export default function Profile() {
  return (
    <div className="root">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "80vh",
          marginTop: "5rem",
          padding: "0 50px",
        }}
      >
        <div className="searchContainer">
          <Paper
            component="form"
            elevation={0}
            sx={{
              p: "10px 10px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <Autocomplete
              freeSolo
              disableClearable
              fullWidth
              options={series.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  size="small"
                  label="Pesquise uma série"
                  InputProps={{
                    ...params.InputProps,
                    type: "Busca",
                    disableUnderline: true,
                  }}
                />
              )}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <Typography marginBottom="1rem" variant="h4">
            Minha lista
          </Typography>

          <Grid container spacing={2}>
            {series.map(({ title, image }) => {
              return (
                <Grid item minWidth={"180px"} xs={2}>
                  <CardSerie title={title} image={image} />
                </Grid>
              );
            })}
          </Grid>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <Typography marginBottom="1rem" variant="h4">
            Recomendadas
          </Typography>

          <Grid container spacing={2}>
            {series.map(({ title, image }) => {
              return (
                <Grid item minWidth={"180px"} xs={2}>
                  <CardSerie title={title} image={image} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}
