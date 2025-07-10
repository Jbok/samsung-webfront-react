import { twMerge } from 'tailwind-merge';
import Loader from '@/components/Loader';

export default function Button({
  variant = 'secondary',
  children,
  loading = false,
  ...restPros
}: {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        'relative h-[32px] cursor-pointer rounded-md',
        variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'secondary' && 'bg-gray-300 text-black hover:bg-gray-500',
        variant === 'danger' && 'bg-red-500 text-white hover:bg-red-600'
      )}
      {...restPros}>
      {loading ? <Loader color="#fff" /> : children}
    </button>
  );
}
