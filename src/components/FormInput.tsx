interface FormInputProps {
  label: string;
  defaultValue: string;
  type: 'text' | 'number';
  position?: 'top' | 'bottom';
  helper?: string;
  reference: React.RefObject<HTMLInputElement>;
}

export default function FormInput({ label, defaultValue, type, position, helper, reference }: FormInputProps) {
  let roundValue = '';
  switch (position) {
    case 'top':
      roundValue = 'rounded-t-md';
      break;
    case 'bottom':
      roundValue = 'rounded-b-md';
      break;
  }

  return (
    <div
      className={`relative flex items-center justify-between overflow-hidden ring-1 ring-inset ring-slate-800 focus-within:z-10 ${roundValue}`}
    >
      <div className="mx-2 my-1.5">
        <label className="block pb-1 text-xs font-medium">{label}</label>
        <input
          type={type}
          className="block w-full border-0 bg-slate-950 p-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          defaultValue={defaultValue}
          ref={reference}
        />
      </div>
      {helper && <div className="flex items-center self-stretch px-2 text-sm text-slate-500">{helper}</div>}
    </div>
  );
}
