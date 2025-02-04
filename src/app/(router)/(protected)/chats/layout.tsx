export default function LayoutChats({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Layout Chats</h1>
      {children}
    </>
  );
}