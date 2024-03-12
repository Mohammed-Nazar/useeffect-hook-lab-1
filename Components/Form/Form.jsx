"use client"
import { useState } from "react";


export default function Form({ setNumberOfDogs, inputText, getDogs }) {
  // How can we manage the number of dogs?

  return (
    <form>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input
          value={inputText}
          onChange={(e) => {
            setNumberOfDogs(e.target.value);
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="d-grid">
        <button
          onClick={(e) => {
            e.preventDefault();
            getDogs();
          }}
          type="submit"
          className="btn btn-primary"
        >
          WOOF!
        </button>
      </div>
    </form>
  );
}
