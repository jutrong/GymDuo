import styled from "styled-components";

import Color from "../../util/color";

const Input = ({
  label,
  value,
  onUpdateValue,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputBox
        value={value}
        onChangeText={onUpdateValue}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      ></InputBox>
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;
const InputLabel = styled.Text`
  color: ${Color.white};
  font-size: 12px;
  font-family: "roboto-Bold";
`;
const InputBox = styled.TextInput`
  margin-top: 5px;
  border: 1px solid ${Color.white};
  padding: 12px 8px;
  border-radius: 8px;
  color: ${Color.white};
`;
