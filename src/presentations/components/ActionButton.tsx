import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon: IconType;
};

export default function ActionButton({ title, icon, ...rest }: ButtonType) {
  const Icon = icon;

  return (
    <>
      <button
        className="py-2 px-4 mx-2
      rounded-full border-0
      bg-violet-50 text-violet-700
      hover:bg-violet-100
      [&_div]:hover:block
      relative
      whitespace-nowrap
      "
        {...rest}>
        <span className="text-xl">{<Icon />}</span>
        <div className="hidden absolute top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white p-2 rounded-md text-xs font-normal">
          {title}
        </div>
      </button>
    </>
  );
}
