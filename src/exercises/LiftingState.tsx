import { BaseProps } from "../types";
import { User, users as usersDB, getNextId } from "../data/data";
import { useState } from "react";
import UserTableWithButtons from "../components/UserTableWithButtons";
import "./LiftingState.css";
import UserFormControlled, { AddEditDeleteFunction } from "../components/UserFormControlled";

export default function LiftingState({ title }: BaseProps) {
  const [users, setUsers] = useState(usersDB);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

  const addEditDeleteUser: AddEditDeleteFunction = (user, isDelete) => {
    if (isDelete) {
      setUsers(users.filter((u) => u.id !== user.id));
    } else if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      // Check if the user object is empty
      if (!user.name && !user.email) {
        alert("Error: The form is empty. Please fill out the form before submitting.");
        return;
      }
      setUsers([...users, { ...user, id: getNextId() }]);
    }
    /*
     1) Implement this method, that should add, edit or delete given these conditions
        This is the method we are going to pass to the UserFormControlled component
        a) isDelete = true  -> Delete the user
        b) user has an id   -> Edit the user
        c) user does not have an id → Create the user
    */
  };

  const editUser = (id: number) => {
    const userToEdit = users.find((u) => u.id === id);
    setUserToEdit(userToEdit);
    /*
     Find the user (in users) given the id and set userToEdit to this user
     Remember users is just an array of users, so you have to find the user in the array
    */
  };
  <h2>{title}</h2>;
  return (
    <>
      <div className="outer">
        <h2 style={{ margin: 0 }}>Root Component</h2>
        <p style={{ margin: 0 }}>
          This is where ALL the users live (Single Source of truth). <em>User Count:</em> <b>{users.length}</b>
        </p>
        <p>
          <em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b>
        </p>

        <div className="outer-user-table">
          <div className="user-table">
            <UserTableWithButtons users={users} editUser={editUser} />
          </div>
          <div className="user-form">
            <UserFormControlled title="Add User" onSubmitUser={addEditDeleteUser} defaultUser={userToEdit} />
          </div>
        </div>
      </div>
    </>
  );
}
