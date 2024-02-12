interface ButtonProps {
  children: string;
  variant?: 'secondary';
  onClick: () => void;
}

export default function Button({ children, variant, onClick }: ButtonProps) {
  let variantStyles = '';
  if (variant === 'secondary') {
    variantStyles = 'bg-slate-950 text-slate-50 border border-slate-700';
  } else {
    variantStyles = 'bg-slate-100 text-slate-950 border-none';
  }

  return (
    <button
      type="button"
      className={`rounded-md px-3.5 py-2.5 text-sm font-semibold ${variantStyles}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
