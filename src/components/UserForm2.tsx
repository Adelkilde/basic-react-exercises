import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm2({ title, onSubmitUser }: UserFormProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const isActiveRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: User = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      isActive: isActiveRef.current?.checked || false,
    };
    onSubmitUser(newUser);
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        Name: <input ref={nameRef} name="name" />
        Email: <input ref={emailRef} name="email" />
        Active: <input ref={isActiveRef} type="checkbox" name="isActive" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
