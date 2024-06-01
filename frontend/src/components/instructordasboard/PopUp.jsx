import React from "react";
import Modal from "react-modal";

const PopUp = ({ isModalOpen, handleCloseModal, selectedCourse }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Course Video"
      className="bg-gray-800 rounded-lg shadow-lg flex flex-col mx-auto p-6"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      style={{
        content: {
          width: "55%", // Adjusted width to be smaller
          height: "70%", // Adjusted height to be smaller
          margin: "auto",
          display: "flex", // Use flexbox to align items
          flexDirection: "column", // Stack items vertically
        },
      }}
      appElement={document.getElementById("root") || undefined} // Set app element here
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white ml-9">
          {selectedCourse ? selectedCourse.title : "Course Video"}
        </h2>
        <button
          onClick={handleCloseModal}
          className="bg-red-500 text-white px-4 py-2 rounded-md mr-9"
        >
          Close
        </button>
      </div>
      {selectedCourse && selectedCourse.videoUrl ? (
        <div className="relative flex-1 flex justify-center items-center">
          <div
            className="relative"
            style={{ width: "90%", paddingBottom: "45%", height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${
                selectedCourse.videoUrl.split("v=")[1]
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Course Video"
            />
          </div>
        </div>
      ) : (
        <p className="text-white">No video available for this course.</p>
      )}
    </Modal>
  );
};

export default PopUp;
