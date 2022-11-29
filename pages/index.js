import Head from "next/head";

export async function getServerSideProps() {
  try {
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());

    return {
      props: { users },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        users: [],
        err,
      },
    };
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>NextJS ServerSideRendering Project</title>
      </Head>
      <main>
        <header>
          <h1>Fake User List</h1>
        </header>
        <section>
          {props.users.map((u) => {
            return (
              <article key={u.id} className='bg-slate-600 h-5'>
                <h3 className={`text-red-500`}>{u.name}</h3>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
