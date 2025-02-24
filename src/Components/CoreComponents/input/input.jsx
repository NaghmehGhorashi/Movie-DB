function Input({ ...rest }) {
  return (
    <div>
      <input
        {...rest}
        className="text-white border rounded-2xl cursor-pointer w-30 h-8 ml-2.5"
      />
    </div>
  );
}

export default Input;
