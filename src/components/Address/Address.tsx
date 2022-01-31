import React from "react";

export interface AddressProps {
  value?: string;
  classNames?: string;
}

const Address = ({ value, classNames }: AddressProps) => {
  value = value?.substring(0, 5) + "..." + value?.substring(value?.length - 5);

  return (
    <p
      className={`text-md grid w-32 cursor-pointer place-items-center rounded-full bg-green-100 px-2 py-[0.22rem] duration-100 hover:bg-green-200 ${classNames}`}
    >
      {value}
    </p>
  );
};

export default Address;
