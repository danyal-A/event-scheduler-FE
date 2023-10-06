import React, { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { createEvent } from "../services/api";

const Modal = ({ selectDate }) => {
  const [showModal, setShowModal] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    date: "",
    isRecurring: false,
    category: "",
    image: "sd",
  });

  const submitHandler = async () => {
    const res = await createEvent(data);
    setShowModal(false);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      isRecurring: isRecurring,
      date: selectDate,
    });
  };
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Event
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add Event</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 mb-2 text-black"
                      placeholder="Add title"
                      name="title"
                      value={data.title}
                      onChange={onChangeHandler}
                    />

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 mb-2 text-black"
                      placeholder="Add description"
                      name="description"
                      value={data.description}
                      onChange={onChangeHandler}
                    />

                    <label className="block text-black text-sm font-bold mb-2">
                      image
                    </label>
                    <GrAttachment className="cursor-pointer mb-2" />
                    <label className="block text-black text-sm font-bold mb-2">
                      Recurring
                    </label>
                    <div className="mb-2">
                      <label className="inline-block mr-4">
                        <input
                          type="radio"
                          value={true}
                          checked={isRecurring}
                          onChange={() => setIsRecurring(true)}
                        />
                        Yes
                      </label>
                      <label className="inline-block">
                        <input
                          type="radio"
                          value={false}
                          checked={!isRecurring}
                          onChange={() => setIsRecurring(false)}
                        />
                        No
                      </label>
                    </div>
                    {isRecurring && (
                      <div>
                        {/* Display three more options when "Yes" is selected */}
                        <label className="block text-black text-sm font-bold mb-2">
                          Recurring Options
                        </label>
                        <div className="flex justify-between">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              id="inlineRadio1"
                              value="Daily"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              Daily
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              id="inlineRadio2"
                              value="monthly"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              Monthly
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              id="inlineRadio2"
                              value="yearly"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              Yearly
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
