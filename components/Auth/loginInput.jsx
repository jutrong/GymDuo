import Input from "../ui/Input";
import Button from "../ui/Button";

import Color from "../../util/color";

const LoginInput = () => {
  return (
    <>
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
      <Button
        btnBgColor={Color.darkBlue}
        btnText={"Log in"}
        btnTextColor={Color.gray}
      />
    </>
  );
};

export default LoginInput;
