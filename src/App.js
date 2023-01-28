import * as React from "react";

import * as MU from "@mui/material";
import "./App.css";
import {
  containerStyle,
  appStyle,
  textFieldStyle,
  btnStyle,
} from "./styles.js";

import { email, password, name } from "./regex.js";

function App() {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [formErr, setFormErr] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormErr(validate(formData));
    setIsSubmit(true);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Insira o nome";
    } else if (!name.test(values.username)) {
      errors.username = "Insira um nome válido";
    }
    if (!values.email) {
      errors.email = "Insira o email";
    } else if (!email.test(values.email)) {
      errors.email = "Insira um email válido";
    }
    if (!values.phone) {
      errors.phone = "Insira o telefone";
    }
    if (!values.password) {
      errors.password = "Insira a senha";
    } else if (!password.test(values.password)) {
      errors.password =
        "A senha deve conter no mínimo de 8 caracteres, uma letra, um número e um caractere especial";
    }
    return errors;
  };

  React.useEffect(() => {
    if (Object.keys(formErr) === 0 && isSubmit) {
      alert("SUBMIT");
    }
  }, [formErr]);

  React.useEffect(() => {
    if (formErr.username) {
      setFormErr(validate(formData));
    }
    if (formErr.email) {
      setFormErr(validate(formData));
    }
    if (formErr.phone) {
      setFormErr(validate(formData));
    }
    if (formErr.password) {
      setFormErr(validate(formData));
    }
  }, [formData]);

  return (
    <div style={containerStyle}>
      <MU.Stack style={appStyle}>
        <MU.TextField
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={textFieldStyle}
          error={formErr.username ? true : false}
          helperText={formErr.username || " "}
          onBlur={handleBlur}
          label="Nome"
          variant="standard"
        />
        <MU.TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={textFieldStyle}
          error={formErr.email ? true : false}
          helperText={formErr.email || " "}
          onBlur={handleBlur}
          label="Email"
          variant="standard"
        />
        <MU.TextField
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={textFieldStyle}
          error={formErr.phone ? true : false}
          helperText={formErr.phone || " "}
          onBlur={handleBlur}
          label="Telefone"
          variant="standard"
        />
        <MU.TextField
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={textFieldStyle}
          error={formErr.password ? true : false}
          helperText={formErr.password || " "}
          onBlur={handleBlur}
          label="Senha"
          variant="standard"
        />
        <MU.Button onClick={handleSubmit} variant="outlined" style={btnStyle}>
          Cadastrar
        </MU.Button>
      </MU.Stack>
    </div>
  );
}

export default App;
