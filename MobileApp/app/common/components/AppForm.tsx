import React from "react";
import { Formik } from "formik";

const AppForm: React.FC<{ 
        initialValues: any, 
        onSubmit?: any, 
        validationSchema?: any, 
        children: any 
    }> 
    = ({ 
        initialValues, 
        onSubmit, 
        validationSchema, 
        children 
    }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}

export default AppForm;
