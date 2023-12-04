// components/RegistrationForm.tsx
import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import User from "../../interfaces/User";

interface RegistrationFormProps {
  user: User;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRegistration: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  user,
  onInputChange,
  onRegistration,
}) => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Typography variant="h5" gutterBottom>
        User Registration
      </Typography>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          name="username"
          value={user.username}
          onChange={onInputChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          type="email"
          value={user.email}
          onChange={onInputChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          type="password"
          value={user.password}
          onChange={onInputChange}
        />
        <Button variant="contained" color="primary" onClick={onRegistration}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationForm;
