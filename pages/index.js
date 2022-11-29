import Head from "next/head";
import { useState } from "react";

export async function getServerSideProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw {
        statusCode: response.status,
        ...response,
      };
    }
    const users = await response.json();
    return { props: { users } };
  } catch (error) {
    return {
      props: { users: [], error: `Error Code: ${error.statusCode}` },
    };
  }
}

export default function Home(props) {
  const [listState, setListState] = useState(false);
  const showList = () => {
    setListState(!listState);
  };

  const buttonState = () => {
    if (!listState) {
      return `Show User List`;
    } else {
      return `Hide User List`;
    }
  };

  const buttonText = buttonState();

  return (
    <>
      <Head>
        <title>NextJS ServerSideRendering Project</title>
      </Head>
      <main className={`h-screen flex flex-col justify-center items-center`}>
        <header
          className={`text-4xl bg-zinc-700 w-1/3 max-w-sm mb-2 pr-5 p-2 text-gray-100`}
        >
          <h1>Fake User List</h1>
        </header>
        <section
          className={`flex flex-col gap-1 p-5 w-1/3 max-w-sm h-96 bg-slate-700 rounded-md`}
        >
          <button
            className={` h-10 bg-amber-400 bg-opacity-90 p-2 text-2xl text-gray-100 flex justify-center items-center mb-2 brightness-90 hover:brightness-105 transition-all duration-300`}
            onClick={showList}
          >
            {buttonText}
          </button>

          {!props.error &&
            listState &&
            props.users.map((u) => {
              return (
                <article
                  key={u.id}
                  className={`bg-slate-600 bg-opacity-40 rounded-tr-md`}
                >
                  <h3 className={`text-red-500`}>{u.name}</h3>
                  <hr className={`border-gray-400`} />
                </article>
              );
            })}
          {props.error && (
            <div className={`flex justify-center`}>
              <h2 className={`text-red-500 text-xl`}>{props.error}</h2>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
