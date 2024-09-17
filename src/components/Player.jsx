import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  //for the editing button
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //the function gets the current state value and returns the opposite
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  //updating the name whenever the user enters a charachter in the field
  function handleChange(event) {
    setPlayerName(event.target.value); //the value the user tries to enter and we setting the value as the new state for playername
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    //when we click the button a input field shows
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
