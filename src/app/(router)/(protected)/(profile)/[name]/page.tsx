export default async function PageProfileByName({params,}: {params: Promise<{ name: string }>}) {
  const name = (await params).name
  return <div>Page chat by id {name}</div>
}