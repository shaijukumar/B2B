import React from "react";
import { useFormikContext } from "formik";

import AppText from "../components/AppText"
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";

const AppFormField: React.FC<{
  name: string,
  width?: string,
  autoCapitalize?: string,
  autoCorrect: boolean,
  icon?: string,
  keyboardType?: string,
  placeholder?: string,
  textContentType?: string,
  secureTextEntry?: boolean
}> =
  ({ name, width, autoCapitalize, autoCorrect, icon, keyboardType, placeholder, textContentType, secureTextEntry }) => {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
      <>
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          width={width}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          icon={icon}
          keyboardType={keyboardType}
          placeholder={placeholder}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}

        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
    );
  }

export default AppFormField;
