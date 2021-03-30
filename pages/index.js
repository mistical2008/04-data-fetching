function HomePage(props) {
  const {products} = props;
  return (
    <ul>
      products.map(product => (
      <li>{product.title}: {product.description}</li>
      ))
    </ul>
  )
}

export async function getStaticProps(context) {

}

export default HomePage;
