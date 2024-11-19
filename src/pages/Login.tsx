import React from "react";
import Title from "../components/Title";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login, signup } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./Signup";
import { useAuthStore } from "../store/authStore";

export interface SignupProps {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const {showAlert} = useAlert();
  const { isLoggedIn, storeLogin, storeLogout } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onValid = (data: SignupProps) => {
    login(data)
      .then((res) => {
        storeLogin(res.token);
        localStorage.setItem("token", res.token);
        showAlert(res.message);
        navigate("/");
      })
      .catch((err) => {
        showAlert(err.response.data.message);
      });
  };

  console.log(isLoggedIn)
  
  return (
    <div>
      <Title size="lg" color="primary">
        로그인
      </Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onValid)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="alert">이메일을 입력해주세요.</span>
            )}
            <InputText
              placeholder="비밀번호"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="alert">비밀번호를 입력해주세요.</span>
            )}
          </fieldset>
          <Button size="lg" scheme="primary" type="submit">
            로그인
          </Button>
          <div className="info">
            <Link to="/reset">비밀번호 찾기</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        </form>
      </SignupStyle>
    </div>
  );
}
