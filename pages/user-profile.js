function UserPage(props) {
  return (
    <>
      <h1>{props.username}</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req);
  console.log(reseee);

  return {
    props: {
      username: "Max",
    },
  };
}

export default UserPage;
