import { ModeToggle } from "@/features/mode-toogle/mode-togle";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>Layout</h1>
      <ModeToggle/>
    {children}
    </>
  
  );
}