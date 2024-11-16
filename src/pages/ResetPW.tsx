import React, { useState } from "react";
import Title from "../components/Title";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { signup } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./Signup";
import { resetPW, pwResetRequest } from "../api/auth.api";

export interface ResetPWProps {
  email: string;
  password: string;
}

export default function ResetPW() {
  const [resetRequest, setResetRequest] = useState<boolean>(false);

  const navigate = useNavigate();
  const showAlert = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPWProps>();

  const onSubmit = (data: ResetPWProps) => {
    if (resetRequest) {
        resetPW(data)
        .then((res) => {
          showAlert("비밀번호 초기화가 완료되었습니다.");
          navigate("/login");
        })
        .catch((err) => {
          showAlert(err.response.data.message);
        });
    } else {
        pwResetRequest(data)
        .then((res) => {
          setResetRequest(true);
        })
        .catch((err) => {
          showAlert(err.response.data.message);
        });
    }
  };

  return (
    <div>
      <Title size="lg" color="primary">
        비밀버번호 초기화
      </Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="alert">이메일을 입력해주세요.</span>
            )}
            {resetRequest && (
              <InputText
                placeholder="비밀번호"
                type="password"
                {...register("password", { required: true })}
              />
            )}
            {errors.password && (
              <span className="alert">비밀번호를 입력해주세요.</span>
            )}
          </fieldset>
          <Button size="lg" scheme="primary" type="submit">
            비밀번호 초기화
          </Button>
        </form>
      </SignupStyle>
    </div>
  );
}
