import styled from "styled-components";

const Button = ({ btnText, btnBgColor, btnTextColor }) => {
  return (
    <>
      <ButtonContainer btnBgColor={btnBgColor}>
        <ButtonBox>
          <ButtonText btnTextColor={btnTextColor}>{btnText}</ButtonText>
        </ButtonBox>
      </ButtonContainer>
    </>
  );
};

export default Button;

const ButtonContainer = styled.Pressable`
  background-color: ${(props) => props.btnBgColor};
  width: 100%;
  height: 48px;
  border-radius: 8px;
  margin-top: 32px;
`;
const ButtonBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const ButtonText = styled.Text`
  color: ${(props) => props.btnTextColor};
  font-size: 16px;
  font-family: "roboto-Bold";
`;
