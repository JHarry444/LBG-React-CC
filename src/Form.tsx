import { FormEventHandler, ReactNode } from "react";

type FormProps = {
    children: ReactNode[],
    className?: string,
    onSubmit?: FormEventHandler
}
const Form = ({ children, className, onSubmit }: FormProps) => {
    return (<form className={className} onSubmit={onSubmit}>
        {children}
    </form>);
}

type FormInputProps = { name: string, id: string, className?: string, type?: string }

Form.Input = ({ name, id, className='form-control', type }: FormInputProps) => {
    return (
        <input type={type} name={name} id={id} className={className} />
    );
}

type LabelProps = { children: [ReactNode, ReactNode]};
Form.Label = ({children}: LabelProps) => {
    return (
        <label className="form-label">
            {children}
        </label>
    )
}

type SubmitProps = { children: ReactNode, className?: string }

Form.Submit = ({ children, className='btn btn-success' }: SubmitProps) => (
    <button type="submit" className={className}>{children}</button>
);


export default Form;