export interface DataFormProps {
    data: string;
}

export interface InputProps {
    initialValue?: string;
    onSubmit: (data: DataFormProps) => void;
}