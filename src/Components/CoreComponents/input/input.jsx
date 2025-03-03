import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Input({ className,label,...rest }) {
  return (
     <div>
      {label && <label>{label}</label>}
      <input
       className={twMerge(clsx(`border rounded-xl cursor-pointer w-25 h-8`))}
      {...rest} />
       </div>
  );
}

export default Input;
