export default async function PageChatById({params,}: {params: Promise<{ id: string }>}) {
  const id = (await params).id
  return <div>Page chat by id {id}</div>
}