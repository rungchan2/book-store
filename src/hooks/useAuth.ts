import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { login } from "@/api/auth.api";
import { useAlert } from "@/hooks/useAlert";
import { SignupProps } from "@/pages/Signup";
import { signup } from "@/api/auth.api";
import { resetPW } from "@/api/auth.api";
import { pwResetRequest } from "@/api/auth.api";
import { useState } from "react";
export const useAuth = () => {
  const { storeLogin, storeLogout } = useAuthStore();
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const useLogin = (data: SignupProps) => {
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

  const useSignup = (data: SignupProps) => {
    signup(data)
      .then(() => {
        showAlert("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        showAlert(err.response.data.message);
      });
  };

  const useLogout = () => {
    storeLogout();
  };

  const useResetPassword = (data: SignupProps) => {
    resetPW(data)
      .then((res) => {
        showAlert("비밀번호 초기화가 완료되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        showAlert(err.response.data.message);
      });
  };
  const [resetRequest, setResetRequest] = useState<boolean>(false);

  const usePwResetRequest = (data: SignupProps) => {
    pwResetRequest(data)
        .then((res) => {
          setResetRequest(true);
        })
        .catch((err) => {
          showAlert(err.response.data.message);
        });
  }

  return {
    useLogin,
    useLogout,
    useResetPassword,
    useSignup,
    usePwResetRequest,
    resetRequest,
    
  };
};
