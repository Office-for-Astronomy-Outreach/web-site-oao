import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  required?: boolean;
  description?: string;
}

const FormLabel: React.FC<LabelProps> = ({
  htmlFor,
  required,
  children,
  description,
  ...props
}) => {
  return (
    <label htmlFor={htmlFor} className="text-gray-700" {...props}>
      {children} {required && <span className="text-red-400">*</span>}
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </label>
  );
};

export default FormLabel;
