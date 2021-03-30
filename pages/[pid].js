import fs from 'fs/promises'
import Link from 'next/link';
import path from 'path'

function ProductPage(props) {
  const {product: {title, description}} = props;
  return (
    <>
      <Link href="/">Get 🔙</Link>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}

export async function getStaticProps(context) {
  const {params: {pid: productId}} = context;
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find(product => product.id === productId)

  return {
    props: {
      product
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {pid: 'p1'}},
      {params: {pid: 'p2'}},
      {params: {pid: 'p3'}},

    ],
    fallback: false,
  }
}

export default ProductPage;
