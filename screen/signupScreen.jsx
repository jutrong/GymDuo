import styled from "styled-components";
import SignupInput from "../components/Auth/signupInput";

import Color from "../util/color";
const SingupScreen = ({ navigation }) => {
  return (
    <SignUpContainer>
      <SignUpHearderBox>
        <SignUpMainText>SignUp</SignUpMainText>
        <SignUpSubTextWrap>
          <SignUpSubText>Already have an Account?</SignUpSubText>
          <SignUpSubTextLink onPress={() => navigation.goBack()}>
            Login
          </SignUpSubTextLink>
        </SignUpSubTextWrap>
      </SignUpHearderBox>
      <SignupInput />
    </SignUpContainer>
  );
};

export default SingupScreen;

const SignUpContainer = styled.View`
  height: 145px;
  background-color: ${Color.primary};
`;
const SignUpHearderBox = styled.View`
  margin: 34px 24px;
`;
const SignUpMainText = styled.Text`
  font-size: 33px;
  font-family: "roboto-Bold";
  color: ${Color.white};
`;
const SignUpSubTextWrap = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 16px;
`;
const SignUpSubText = styled.Text`
  font-size: 14px;
  color: ${Color.white};
  font-family: "roboto-Medium";
`;
const SignUpSubTextLink = styled.Text`
  color: ${Color.white};
  font-family: "roboto-Bold";
  text-decoration: underline solid ${Color.white};
`;
