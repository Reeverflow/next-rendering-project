const User = (props) => {
  console.log(props);
  return (
    <article>
      <h2>hi</h2>
    </article>
  );
};

export default User;

export async function getServerSideProps(context) {
  const { userId } = context.params;
  try {
    const user = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((res) => res.json());
    return {
      props: { user },
    };
  } catch (error) {
    return {
      user: [],
      error,
    };
  }
}
