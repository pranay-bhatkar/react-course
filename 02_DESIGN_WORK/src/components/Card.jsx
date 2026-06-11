function Card({ title = "Default", buttenText = "Check it now", imageUrl= "url" }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-500 rounded-2xl mt-8 shadow overflow-hidden transition-shadow">
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt="sample image"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-black">{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            molestiae sequi nam fugit cum animi sapiente soluta dolorem tempora.
            Ratione quisquam accusamus?
          </p>
          <button className="text-white bg-blue-600 p-1 rounded-md mt-3 hover:bg-blue-900">
            {buttenText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
