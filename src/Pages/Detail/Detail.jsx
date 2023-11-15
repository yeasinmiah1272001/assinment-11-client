

const Detail = ({ card }) => {
  const { img, title, description, price } = card;

  return (
    <div>
      <div>
        <div className="relative w-full mb-5">
          <img
            src="https://i.ibb.co/VNgS2XT/banner4.jpg"
            alt="Banner"
            className="w-full h-[400px]"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl bg-white mb-5">
        <img
          className="w-full h-64 object-cover object-center"
          src={img}
          alt="Shoes"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-xl mb-4">{price}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
