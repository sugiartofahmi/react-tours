const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-full items-center pt-20 ">
      {children}
    </main>
  );
};
export default MainLayout;
