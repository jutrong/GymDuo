import styled from "styled-components";

import Color from "../util/color";

import LoginInput from "../components/Auth/loginInput";

const LoginScreen = ({ navigation }) => {
  return (
    <LoginContainer>
      <LoginTitleWrap>
        <Welcome>Welcome</Welcome>
        <HaveAccountWrap>
          <HaveAccountText>Don't have an account?</HaveAccountText>
          <HaveAccountLink
            onPress={() => {
              navigation.navigate("SignupScreen");
            }}
          >
            SignUp
          </HaveAccountLink>
        </HaveAccountWrap>
      </LoginTitleWrap>
      <LoginInput />
    </LoginContainer>
  );
};

export default LoginScreen;

const LoginContainer = styled.View`
  padding: 24px;
`;
const LoginTitleWrap = styled.View`
  margin-top: 48px;
  margin-bottom: 120px;
  width: 100%;
`;
const Welcome = styled.Text`
  color: ${Color.white};
  font-size: 33px;
  font-family: "roboto-Bold";
  letter-spacing: 1px;
`;
const HaveAccountWrap = styled.View`
  margin-top: 16px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const HaveAccountText = styled.Text`
  color: ${Color.white};
  font-weight: 400;
  font-family: "roboto-Medium";
`;
const HaveAccountLink = styled.Text`
  color: ${Color.primary};
  font-weight: 500;
  text-decoration: underline solid ${Color.primary};
`;
