export default function TextField({
  label,
  ...restProps
}: {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <label className="flex flex-col gap-1">
        {label && <span className="text-xs text-gray-500">{label}</span>}
        <input
          {...restProps}
          className="rounded-md border border-gray-500 px-2"
        />
      </label>
    </>
  );
}
