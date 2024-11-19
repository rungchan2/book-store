import React from "react";
import { useLocation } from "react-router-dom";
import { OrderSheet as TOrderSheet } from "../types/order.type";
import { StyledCart } from "./Cart";
import Title from "../components/Title";
import Button from "../components/Button";
import { formatNumber } from "../utils/formatNumber";
import InputText from "../components/InputText";
import { useForm } from "react-hook-form";
import { Delivery } from "../types/order.type";
import FindAddress from "../components/Order/FindAddress";
import { createOrder } from "../api/order.api";
import { useAlert } from "../hooks/useAlert";
import { useNavigate } from "react-router-dom";

interface DeliveryForm extends Delivery {
  addressDetail: string;
}

export default function OrderSheet() {
  const location = useLocation();
  const navigate = useNavigate();
  const { showAlert, showConfirm } = useAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<DeliveryForm>();
  const orderData = location.state as Omit<TOrderSheet, "delivery">;

  const { totalQuantity, totalPrice, firstBookTitle } = orderData;

  const onSubmit = (data: DeliveryForm) => {
    const orderDataWithDelivery = {
      ...orderData,
      delivery: {
        address: `${data.address} ${data.addressDetail}`,
        receiver: data.receiver,
        contact: data.contact,
      },
    };

    showConfirm("주문을 진행하시겠습니까?", () => {
      createOrder(orderDataWithDelivery)
        .then((response) => {
          showAlert(response.data.message);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <StyledCart>
      <Title size="lg" color="primary">
        주문서 작성
      </Title>
      <div className="cart-container">
        <div className="left">
          <div className="address-input">
            <form className="delivery">
              <fieldset>
                <label>주소</label>
                <div className="input-wrapper">
                  <InputText
                    placeholder="주소"
                    type="text"
                    {...register("address", { required: true })}
                  />
                </div>
                <FindAddress
                  onComplete={(address) => setValue("address", address)}
                />
              </fieldset>
              {errors.address && <p>주소를 입력해주세요.</p>}
              <fieldset>
                <label>상세주소</label>
                <div className="input-wrapper">
                  <InputText
                    placeholder="상세주소"
                    type="text"
                    {...register("addressDetail", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.addressDetail && <p>상세주소를 입력해주세요.</p>}
              <fieldset>
                <label>수령인</label>
                <div className="input-wrapper">
                  <InputText
                    placeholder="수령인"
                    type="text"
                    {...register("receiver", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.receiver && <p>수령인을 입력해주세요.</p>}
              <fieldset>
                <label>연락처</label>
                <div className="input-wrapper">
                  <InputText
                    placeholder="연락처"
                    type="text"
                    {...register("contact", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.contact && <p>연락처를 입력해주세요.</p>}
            </form>
          </div>
          <div className="little-summary">
            <Title size="md" color="primary">
              주문 상품
            </Title>
            <strong>
              {firstBookTitle} 외 {totalQuantity - 1}권
            </strong>
          </div>
        </div>
        <div className="summary">
          <Title size="md" color="primary">
            주문 요약
          </Title>
          <dl>
            <dt>총 수량</dt>
            <dd>{totalQuantity}개</dd>
          </dl>
          <dl>
            <dt>총 금액</dt>
            <dd>{formatNumber(totalPrice)}원</dd>
          </dl>
          <Button
            className="order-button"
            scheme="primary"
            size="md"
            onClick={handleSubmit(onSubmit)}
          >
            결제하기
          </Button>
        </div>
      </div>
    </StyledCart>
  );
}
