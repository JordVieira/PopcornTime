import { TextField, Typography, Button, Link } from "@mui/material";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./estilo.css";

export default function Login() {
  return (
    <div className="root">
      <div className="background-primary">
        <Logo style={{ height: "100px" }} />
        <Typography variant="h4" component="div" className="titulo">
          É bom ter você de volta!
        </Typography>

        <div className="formulario">
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
          <Button
            fullWidth
            style={{ backgroundColor: "#363636", color: "#FEC601" }}
          >
            Entrar
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
            <Link href="#" color={"inherit"}>Esqueceu a senha?</Link>
            </Typography>
            <Typography component="div" className="titulo">
              Não é cadastrado? <Link href="/cadastro">Cadastre-se</Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
