import AddCart from "../AddCart/AddCart";

const ProductInfo = () => {
  return (
    <div className="product-info w-11/12 m-auto / md:w-full">
      <h3 className="pt-3 / md:pt-0 md:text-lg">Sneaker Company</h3>
      <h1 className="font-bold text-xl w-3/4 / md:text-3xl md:pt-5">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-sm pt-3 / md:pt-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="relative flex pt-3 / md:flex-col md:pt-6">
        <h4 className="font-bold text-xl">$125.00</h4>
        <h2 className="discount flex h-1/2 px-2 text-sm font-bold ml-5 rounded-md items-center/ md:absolute md:h-auto md:left-16 md:top-7">
          50%
        </h2>
        <h4 className="original-cost ml-auto text-sm font-bold line-through / md:ml-0 md:pt-2">
          $250.00
        </h4>
      </div>

      <AddCart />
    </div>
  );
};

export default ProductInfo;
