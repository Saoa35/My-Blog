import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { email: "", password: "" } });

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Login
      </Typography>
      <TextField
        className={styles.field}
        label="E-Mail"
        error
        helperText="Invalid mail"
        fullWidth
      />
      <TextField className={styles.field} label="Password" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Sign in
      </Button>
    </Paper>
  );
};
