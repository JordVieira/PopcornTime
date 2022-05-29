import { TextField, Typography, Button, Link } from "@mui/material";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./estilo.css";

export default function Cadastro() {
  return (
    <div className="root">
      <div className="background-primary">
        <Logo style={{ height: "100px" }} />
        <Typography variant="h4" component="div" className="titulo">
          Cadastro
        </Typography>

        <div className="formulario">
          <TextField
            className="campo-formulario"
            fullWidth
            id="outlined-user-input"
            label="E-mail"
            type="mail"
            required
          />
          <TextField
            className="campo-formulario"
            fullWidth
            id="outlined-user-input"
            label="Usuário"
            type="user"
            required
          />
          <TextField
            fullWidth
            className="campo-formulario"
            id="outlined-password-input"
            label="Senha"
            type="password"
            required
          />
          <TextField
            fullWidth
            className="campo-formulario"
            id="outlined-password-input"
            label="Confirmação da senha"
            type="password"
            required
          />
          <Button
            fullWidth
            href="/login"            
            style={{ backgroundColor: "#363636", color: "#FEC601" }}
          >
            Cadastrar
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >            
            <Typography component="div" className="titulo">
              Já tem uma conta? <Link href="/login">Entre agora</Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
