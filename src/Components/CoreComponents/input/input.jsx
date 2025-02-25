import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Input({ ...rest }) {
  return (
     <div>
      <input
       
       className={twMerge(clsx(`border rounded-xl cursor-pointer w-25 h-8`))}
      {...rest}>
        
      </input>
    </div>
  );
}

export default Input;
