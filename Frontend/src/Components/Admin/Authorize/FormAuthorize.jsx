import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authorized } from "../../../actions";
import { tokenUsuario } from "../../../actions/actionTypes";
import { cohorte } from "../../../auxiliares/constantes";

export const FormAuthorize = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const authorize = {
    email: input,
    cohorte: select,
  };

  async function onSubmit(e) {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_PUERTO}reportes/auth`,
      authorize,
      tokenUsuario()
    );
    alert("se autorizo a " + input);
    dispatch(authorized());
  }
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input placeholder="email" onChange={handleInputChange}></input>
      <select onChange={handleChange}>
        <option>Cohorte</option>
        {cohorte.map((e) => (
          <option value={e.option}>{e.option}</option>
        ))}
      </select>

      <button type="submit"> autorizar </button>
    </form>
  );
};
