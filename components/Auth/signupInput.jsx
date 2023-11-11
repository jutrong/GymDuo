import styled from "styled-components";

import Input from "../ui/Input";
import Button from "../ui/Button";

import Color from "../../util/color";

const SignupInput = () => {
  return (
    <SingupInputContainer>
      <Input
        label={"Name"}
        placeholder={"이름을 입력하세요."}
        secureTextEntry={false}
      ></Input>
      <Input
        label={"Email"}
        placeholder={"이메일을 입력하세요."}
        secureTextEntry={false}
      ></Input>
      <Input
        label={"Password"}
        placeholder={"비밀번호를 입력하세요."}
        secureTextEntry={true}
      ></Input>
      <Input
        label={"Password Confirm"}
        placeholder={"비밀번호를 입력하세요."}
        secureTextEntry={true}
      ></Input>
      <Button
        btnBgColor={Color.darkBlue}
        btnText={"Sign up"}
        btnTextColor={Color.gray}
      />
    </SingupInputContainer>
  );
};

export default SignupInput;

const SingupInputContainer = styled.View`
  margin-top: 80px;
  padding: 24px;
`;
