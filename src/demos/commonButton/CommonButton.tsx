
type ButtonProps = {
  label: string;
  message: string;
  onMsgUpdate: () => void;
};

export default function CommonButton({ label, onMsgUpdate }: ButtonProps) {
  return (
    <button key={label} onClick={onMsgUpdate}>
      {label}
    </button>
  );
}
