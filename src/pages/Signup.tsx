import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../hooks/useAlert";
export interface SignupProps {
  email: string;
  password: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const showAlert = useAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onValid = (data: SignupProps) => {
    signup(data)
      .then((res) => {
        showAlert("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        showAlert(err.response.data.message);
      });
  };

  return (
    <div>
      <Title size="lg" color="primary">
        회원가입
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
            회원가입
          </Button>
          <div className="info">
            <Link to="/reset">비밀번호 찾기</Link>
            <Link to="/login">로그인</Link>
          </div>
        </form>
      </SignupStyle>
    </div>
  );
}

const SignupStyle = styled.div`
  max-width: ${({ theme }) => theme.layoutWidth.sm};
  margin: 0 auto;

  & fieldset {
    display: flex;
    padding: 0;
    margin: 0;
    border: none;
    flex-direction: column;
    gap: 1rem;

    & input {
      width: 100%;
    }
  }

  & .info {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    text-align: center;
  }
  & button {
    margin-top: 1rem;
    width: 100%;
  }
  & .alert {
    color: ${({ theme }) => theme.color.error};
  }
`;
