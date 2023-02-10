const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-full items-center pt-20 bg-[#E5E0FF] ">
      {children}
    </main>
  );
};
export default MainLayout;
