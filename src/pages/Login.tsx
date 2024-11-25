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
import { useAuth } from "@/hooks/useAuth";

export interface SignupProps {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();
  const { useLogin } = useAuth();

  const onValid = (data: SignupProps) => {
    useLogin(data)
  };  
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
              autoFocus
              inputMode="email"
            />
            {errors.email && (
              <span className="alert">이메일을 입력해주세요.</span>
            )}
            <InputText
              placeholder="비밀번호"
              type="password"
              {...register("password", { required: true })}
              inputMode="text"
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
