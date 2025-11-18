import Image from "next/image";

async function getSingleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product || product.message) {
    return (
      <h2 className="text-center text-red-500 py-20">
        Product not found 😢
      </h2>
    );
  }

  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-10 my-20">
        <div className="w-[50%] bg-[#fbf0ef] p-5 rounded-lg">
            <Image
          src={product.thumbnail || "/fallback.png"}
          alt={product.title}
          width={990}
          height={990}
          style={{ height: "auto", width: "auto" }} 
          className="rounded-md object-cover w-[990px] h-[990px]"
        />
        </div>



        <div className="w-[50%]">
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg text-gray-500 capitalize mb-2">
            Category: {product.category}
          </p>
          <p className="text-xl font-semibold text-red-600">${product.price}</p>
        </div>
      </div>
    </section>
  );
}