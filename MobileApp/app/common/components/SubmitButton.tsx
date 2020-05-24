import React from "react";
import { useFormikContext } from "formik";

import Button from "./AppButton";


const SubmitButton: React.FC<{ title: string }> = ({ title }) => {

    const { handleSubmit } = useFormikContext();

    return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
