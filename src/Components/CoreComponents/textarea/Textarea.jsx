import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Textarea({className, label,...rest }) {
  return (
     <div>
      {label && <label>{label}</label>}
      <textarea
       className={twMerge(clsx(`border rounded-xl cursor-pointer w-25 h-20`))}
      {...rest} />
        
    
    </div>
  );
}

export default Textarea;
