import React, { useState } from "react";
import RegistrationForm from "../../components/user-auth/UserRegistrationForm";
import { registerUser } from "../../services/UserService";
import User from "../../interfaces/User";

const UserRegistrationPage: React.FC = () => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async () => {
    try {
      await registerUser(user);
      console.log("User registered successfully:", user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("User registration failed:", error.message);
      } else {
        console.error("User registration failed:", error);
      }
    }
  };

  return (
    <RegistrationForm
      user={user}
      onInputChange={handleInputChange}
      onRegistration={handleRegistration}
    />
  );
};

export default UserRegistrationPage;
