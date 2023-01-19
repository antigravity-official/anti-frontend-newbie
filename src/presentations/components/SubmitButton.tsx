import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  processingTitle: string;
  icon: IconType;
  processing: boolean;
};

export default function SubmitButton({ title, processingTitle, icon, processing, ...rest }: ButtonType) {
  const Icon = icon;

  return (
    <button
      className="py-2 px-12 mx-2
      rounded-md 
      bg-violet-50 text-violet-700
      hover:bg-violet-100
      cursor-pointer
      border border-violet-700
      flex items-center
      whitespace-nowrap
      "
      {...rest}>
      {processing ? (
        <>
          <Icon className="mr-1 motion-reduce:hidden animate-spin" />
          {processingTitle}
        </>
      ) : (
        title
      )}
    </button>
  );
}
