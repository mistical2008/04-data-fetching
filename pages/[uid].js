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

  return {
    props: {
      username: `userid-${params.uid}`,
    },
  };
}

export default UserPage;
