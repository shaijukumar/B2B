import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../components/AppText";
import { useFormikContext } from "formik";

const ErrorMessage: React.FC<{
    error: string
    visible: boolean
}>
    = ({
        error,
        visible
    }) => {

        const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
        if (!visible || !error) return null;

        return <AppText style={styles.error}>{error}</AppText>;
    }

const styles = StyleSheet.create({
    error: { color: "red" },
});

export default ErrorMessage;
