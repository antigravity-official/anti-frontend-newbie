import { Dispatch, SetStateAction, createRef, useReducer } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

type DropDownsProps = {
  label: string;
  summary: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  array: { name: string; data: number }[];
};

export default function DropDowns({ label, summary, array, state, setState }: DropDownsProps) {
  const [show, toggleShow] = useReducer((prev) => !prev, false);

  const buttonRefs = Array.from({ length: array.length }).map((v) => createRef<HTMLButtonElement>());

  const onClickItem = (i: number) => {
    const name = buttonRefs[i]?.current!.getAttribute('data-name');
    const data = buttonRefs[i]?.current!.getAttribute('data-data');
    setState(JSON.stringify({ name, data }));
    toggleShow();
  };

  return (
    <div className="flex flex-col items-start relative mb-5">
      <button
        className="
        flex-shrink-0 z-10 inline-flex items-center 
        py-2.5 px-4 text-sm font-medium text-center
        border border-violet-700 rounded-md 
        focus:outline-none
       hover:bg-violet-50
       bg-white text-violet-900
      "
        onClick={toggleShow}>
        <span className="pr-4 mr-4 divide-y border-r border-violet-200">{label}</span>
        {JSON.parse(state).name} <MdKeyboardArrowDown className="ml-2" />
      </button>
      <div
        className={`${
          show ? 'block' : 'hidden'
        } absolute top-12 left-1/2 -translate-x-1/2 z-50 bg-white divide-y divide-gray-100 rounded shadow w-44`}>
        <ul className="py-1 text-sm text-gray-700">
          <p className="inline-flex w-full px-4 py-2 text-xs text-gray-500">{summary}</p>
          {array.map((item, i) => (
            <li key={item.name}>
              <button
                ref={buttonRefs[i]}
                className="inline-flex w-full px-4 py-2 text-sm text-violet-900 hover:bg-violet-50"
                data-name={item.name}
                data-data={item.data}
                onClick={() => onClickItem(i)}>
                <div className="inline-flex items-center">{item.name}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
