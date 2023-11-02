import React, { useState } from 'react';
import Filter from './Filter';
import { AiFillCloseSquare } from 'react-icons/ai';
import { FcFilledFilter } from 'react-icons/fc';
import { CiFilter } from 'react-icons/ci';

function Modal({ crashes, filtered, setFiltered }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center top-1/2 z-1000">
      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeModal}
        ></div>
      )}
      {/* Modal */}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/2 rounded-lg p-6 z-1000">
          <Filter
            crashes={crashes}
            setFiltered={setFiltered}
            filtered={filtered}
            closeModal={closeModal}
          />
          <button
            className="bg-red-500 text-white px-2 py-0 rounded hover:bg-red-600 hover:text-black absolute top-4 right-4"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      )}
      {/* Open Modal Button */}
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-slate-700 flex flex-col justify-center align-middle"
        onClick={openModal}
      >
        Filter
        {filtered.length !== crashes.length ? <FcFilledFilter /> : <CiFilter />}
        {filtered.length}
      </button>
    </div>
  );
}

export default Modal;
