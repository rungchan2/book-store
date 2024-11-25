import Title from "../components/Title";
import styled from "styled-components";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
export interface SignupProps {
  email: string;
  password: string;
}

export default function Signup() {
  const { useSignup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onValid = (data: SignupProps) => {
    useSignup(data)
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

export const SignupStyle = styled.div`
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
