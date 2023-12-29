/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { brandList } from "../../constance";
import { dummyColor } from "../../constance/index";
import useProductRegister from "../../hooks/useProductRegister";
import Button from "../Commons/Button";
import CheckBoxSelector from "./CheckBoxSelector";
import ColorSelector from "./ColorSelector";
// import ImageSelector from "./ImageSelector";
import InputSelect from "./InputSelect";
import InputText from "./InputText";

export default function ProductRegisterForm() {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    stock: 0,
    // category: "",
    // brand_id: 0,
    // brand_name: "",
    // color: "",
    // size: "90",
  });

  const [images, setImages] = useState([]);
  const [contentImg, setContentImg] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const postRegister = useProductRegister({
    ...inputs,
    // images: images,
    // content_images: contentImg,
  });

  useEffect(() => {
    let valid = true;
    for (let i in inputs) {
      if (!inputs[i]) {
        valid = false;
        break;
      }
    }

    // if (!contentImg.length || !images.length) {
    //   valid = false;
    // }
    setIsValid(valid);
  }, [inputs]);
  //, images , contentImg  빼 버림

  // useEffect(() => {
  //   if (inputs.brand_name !== "") {
  //     const brandId = brandList.filter((v) => {
  //       if (v.name === inputs.brand_name) {
  //         return v.id;
  //       }
  //     });
  //     setInputs({ ...inputs, brand_id: brandId[0].id });
  //   }
  // }, [inputs.brand_name]);

  const inputChangeHandler = (e) => {
    if (e.target.name === "price") {
      setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });
    } else {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
  };

  const postRegisterHandler = (e) => {
    e.preventDefault();
    postRegister.mutate();
  };

  if (postRegister.isSuccess) {
    console.log("register success");
  }

  return (
    <Container>
      <InputWrapper>
        <InputText
          name={"title"}
          label={"Product Name"}
          text={"Input Product Name"}
          require={true}
          mode={"title"}
          type={"text"}
          changeHandler={inputChangeHandler}
        />
        <InputText
          name={"price"}
          label={"Price"}
          text={"Input Price"}
          require={true}
          mode={"price"}
          type={"text"}
          changeHandler={inputChangeHandler}
        />
        <InputText
          name={"stock"}
          label={"Quantity"}
          text={"Input Quantity"}
          require={true}
          mode={"title"}
          type={"text"}
          changeHandler={inputChangeHandler}
        />
        {/* <CategoryBox>
          <InputSelect
            name="category"
            label={"Category1"}
            text={"Category1"}
            require={true}
            changeHandler={inputChangeHandler}
          />
        </CategoryBox> */}
        {/* <InputSelect
          label={"Brand"}
          name={"brand_name"}
          text={"Select Brand"}
          require={true}
          changeHandler={inputChangeHandler}
        /> */}
        {/* <ColorSelector
          require={true}
          colorList={dummyColor}
          name={"color"}
          changeHandler={inputChangeHandler}
        /> */}
        {/* <CheckBoxSelector /> */}
        {/* <ImageSelector
          buttonText={"Select Thumbnail"}
          label={"images"}
          name="images"
          changeHandler={setImages}
        /> */}
        {/* <ImageSelector
          buttonText={"Select ContentImg"}
          label={"Content Image"}
          name="content_images"
          changeHandler={setContentImg}
        /> */}
      </InputWrapper>
      <SubmitButtonWrapper>
        <Button disable={isValid} onClick={postRegisterHandler}>
          Register
        </Button>
      </SubmitButtonWrapper>
    </Container>
  );
}

const Container = styled.form`
  margin-top: 60px;
  margin-bottom: 60px;
`;

const InputWrapper = styled.div`
  max-width: 620px;
  min-width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 32px;
  margin-bottom: 48px;
`;

const CategoryBox = styled.div`
  grid-column: span 2;
  grid-column-start: 2;
  grid-column-end: 2;
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
