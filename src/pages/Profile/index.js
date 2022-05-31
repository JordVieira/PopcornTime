import { useState } from "react";
import {
  Grid,
  Avatar,
  Typography,
  Button,
  Modal,
  Paper,
  TextField,
  ButtonBase,
} from "@mui/material";
import CardReview from "../../components/CardReview";
import Header from "../../components/Header";
import "./estilo.css";
import React from "react";

const series = [
  {
    title: "A Roda do Tempo",
    image:
      "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/10/arodatempo-wheeloftime-poster2.jpg",
    year: 2021,
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  // { title: "Euphoria", image:"https://br.web.img3.acsta.net/pictures/22/03/10/15/32/5564716.jpg", year: 2019 },
  {
    title: "Lupin",
    image: "https://br.web.img3.acsta.net/pictures/20/12/02/16/22/0450183.jpg",
    year: 2021,
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  // { title: "Moon Knight", image:"https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg", year: 2022 },
  {
    title: "Obi-Wan Kenobi",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/obi-wan_kenobi_poster_60ba8b0f.jpeg",
    year: 2022,
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Ruptura",
    image:
      "https://i2.wp.com/soundtracksscoresandmore.com/wp-content/uploads/2022/02/severance_600.jpg",
    year: 2022,
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Stranger Things",
    image:
      "https://pbs.twimg.com/media/FSkCESUWYAAThYb?format=jpg&name=900x900",
    year: 1994,
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "WandaVision",
    image:
      "https://img.elo7.com.br/product/original/3816CC2/big-poster-serie-wandavision-lo001-cartaz.jpg",
    year: 2022,
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

export default function Inicial() {
  const [open, setOpen] = useState(false);

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
        <div className="userDetails">
          <Avatar
            style={{ height: "5rem", width: "5rem" }}
            alt="Vitor"
            src="/static/images/avatar/2.jpg"
          />

          <div className="editProfile">
            <Typography marginLeft="5px" variant="h5">
              Vitor Gabriel
            </Typography>
            <div>
              <Button onClick={() => setOpen(true)} color="warning">
                Editar perfil
              </Button>
              <Button href="\login" color="error">
                Sair
              </Button>
            </div>
          </div>
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Paper
            elevation={0}
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
              height: "60%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
            }}
          >
            <Typography variant="h3">Editar perfil</Typography>
            <div style={{ display: "flex" }}>
              <ButtonBase variant="contained" component="label">
                <Avatar
                  style={{ height: "5rem", width: "5rem" }}
                  alt="Vitor"
                  src="/static/images/avatar/2.jpg"
                />
                <input type="file" hidden></input>
              </ButtonBase>
            </div>
            <TextField value={"Vitor Gabriel"} />
            <div>
              <Button
                variant="contained"
                onClick={() => setOpen(false)}
                color="primary"
              >
                Atualizar
              </Button>
              <Button
                sx={{ marginLeft: "10px" }}
                variant="outlined"
                onClick={() => setOpen(false)}
                color="primary"
              >
                Cancelar
              </Button>
            </div>
          </Paper>
        </Modal>

        <div style={{ marginBottom: "2rem" }}>
          <Typography marginBottom="1rem" variant="h5">
            Seus reviews recentes
          </Typography>

          <Grid container spacing={2}>
            {series.map(({ title, image, review, rating }) => {
              return (
                <Grid item minWidth={"180px"} xs={12}>
                  <CardReview
                    title={title}
                    image={image}
                    review={review}
                    rating={rating}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}
