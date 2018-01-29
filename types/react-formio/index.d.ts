declare module "react-formio" {
    import * as React from "react";
    
    class FormioProps {
        src: string;
        form?: any;
        submission?: any;
        onChange?(submission: any, key: string, value: string): void;
        onFormSubmit?(submission: any): void;
    }

    class Formio extends React.Component<FormioProps, any> { 
    }
}