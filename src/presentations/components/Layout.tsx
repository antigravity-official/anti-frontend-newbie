type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-violet-100">
      <div className="max-w-5xl w-96 p-9 bg-white rounded-md shadow-md">
        <h1 className="text-lg font-semibold mb-5 text-center text-purple-900">{title}</h1>
        <main className="flex flex-col items-center justify-center w-full">{children}</main>
      </div>
    </div>
  );
}
