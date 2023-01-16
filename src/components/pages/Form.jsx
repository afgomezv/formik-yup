import { Button, Grid, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/Form.css";

export const Form = () => {
  // let valoresIniciales = {
  //   nombre: "",
  //   email: "",
  //   contraseña: "",
  // };

  // const sendForm = (data) => {
  //   console.log(data);
  // };

  const { handleSubmit, handleChange, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Debes ingresar un nombre"),
        email: Yup.string().required("Debes ingresar un email"),
        password: Yup.string().required("Debes ingresar una contraseña"),
      }),
      onSubmit: (data) => {
        console.log(data);
      },
    });

  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario de registro
      </Typography>
      <form className="form-container" onSubmit={handleSubmit}>
        <Grid2
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid2 item xs={12} md={7}>
            <TextField
              type="text"
              label="Nombre"
              variant="outlined"
              fullWidth
              //name="name"
              onChange={(e) => {
                setFieldValue("name", e.target.value);
              }}
              value={values.name}
              error={errors.name}
              helperText={errors.name}
            />
          </Grid2>
          <Grid2 item xs={12} md={7}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid2>
          <Grid2 item xs={12} md={7}>
            <TextField
              type="password"
              label="Contraseña"
              variant="outlined"
              fullWidth
              name="password"
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              helperText={errors.password}
            />
          </Grid2>
        </Grid2>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};
