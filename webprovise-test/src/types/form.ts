export interface DataFormProps {
    data: string;
}
export interface InputProps {
    onSubmit: (data: DataFormProps) => void;
}