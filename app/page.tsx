import {getPosts} from "@/_actions/postAction"


export default async function Home() {
  const {data,errMsg} =  await getPosts()

  if(errMsg){
     return <h1>{errMsg}</h1>
  }

  
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {
      data.map((item: { id: number, msg: string }) => (
        <h2 key={item.id}>{item.msg}</h2>
      ))
    }
        <h1>Welcome to my world</h1>
  </main>
  );
}
