const fs = require("fs").promises;
import Link from "next/link";
import path from "path";

function ProductPage(props) {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link href="/">Get 🔙</Link>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
  const {
    params: { pid: productId },
  } = context;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) return { notFound: true };

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  // NOTE: check for awaits in every async function if 'data' === undefined
  const data = await getData();
  const params = data.products.map((product) => {
    return { params: { pid: product.id } };
  });

  return {
    paths: params,
    fallback: true,
  };
}

export default ProductPage;
