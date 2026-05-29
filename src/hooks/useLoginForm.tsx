import { useForm } from "react-hook-form";
import type { User } from "../interfaces/user.interface";
import { loginUser } from "../services/users/actions/user-api-movieMate";
import { useNavigate } from "react-router";
import { useState } from "react";

export const useLoginForm = (
  login: (token: string, userResponse: User) => void,
) => {
  const [loginError, setLoginError] = useState<string>();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginUser(data);
      const token = response.token;

      const userResponse = {
        email: response.email,
        fullName: response.fullName,
      };
      if (token) {
        login(token, userResponse);
        navigate("/profile/favorites_personal_data");
      }
    } catch (error) {
      setLoginError(`${error}`);
    }
  });

  return {
    register,
    errors,
    onSubmit,
    navigate,
    loginError,
  };
};
