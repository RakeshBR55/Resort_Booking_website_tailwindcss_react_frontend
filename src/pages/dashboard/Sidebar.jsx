import DrawerElements1 from "../../static/DrawerElements";
import DrawerComponent from "../../components/Dashboard/DrawerComponent";

const Sidebar = () => {
  return (
    <>
      <aside className="lg:block lg:w-64" aria-label="Sidebar">
        <div className="overflow-y-auto h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 shadow-2xl">
          <a href="/" className="flex items-center pl-2.5 mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-7"
              alt="Madhu Home Stay Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Madhu Home Stay
            </span>
          </a>
          <ul className="space-y-2">
            {DrawerElements1.map((ele) => (
              <DrawerComponent label={ele.label} Icon={ele.Icon} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
