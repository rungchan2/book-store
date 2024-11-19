import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useEffect } from "react";

const SCRIPT_URL = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"

interface FindAddressProps {
  onComplete: (address: string) => void;
}

export default function FindAddress({ onComplete }: FindAddressProps) {


    const handleOpen = () => {
        new window.daum.Postcode({
            oncomplete: (data: any) => {
                onComplete(data.address);
            },
        }).open();
    }
    
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Button type="button" size="md" scheme="primary" onClick={handleOpen}>
      주소 검색
    </Button>
  );
}

const StyledFindAddress = styled.div``;