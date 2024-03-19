'use client';
import { useState } from 'react';
import useNamesStore from '@/stores';

const NamesManager = () => {
  const [newName, setNewName] = useState('');
  const [nameToUpdate, setNameToUpdate] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const { names, addName, removeName, updateName } = useNamesStore();

  const handleAddName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addName(newName);
    setNewName('');
  };

  const handleUpdateName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateName(nameToUpdate, updatedName);
    setNameToUpdate('');
    setUpdatedName('');
  };

  return (
    <div>
      <form onSubmit={handleAddName}>
        <p>Add a new name</p>
        <input
          className="text-black"
          type="text"
          placeholder="New name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <form onSubmit={handleUpdateName}>
        <p>Update a name</p>
        <input
          className="text-black"
          type="text"
          placeholder="Name to update"
          value={nameToUpdate}
          onChange={(e) => setNameToUpdate(e.target.value)}
        />
        <input
          className="text-black"
          type="text"
          placeholder="Updated name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>

      <div>
        <p>Names List</p>
        <ul>
          {names.map((name: any, index: any) => (
            <li key={index}>
              {name}{' '}
              <button className="text-red-200" onClick={() => removeName(name)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NamesManager;
