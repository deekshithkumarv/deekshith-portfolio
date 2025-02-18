import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 sticky top-0 z-[1] mx-auto  flex w-full flex-wrap items-center justify-between bg-background font-burtons text-xl dark:border-gray-800 dark:bg-d-background ">
      {/* <Logo /> */}
     
      <Nav />
    </header>
  );
};

export default Header;
