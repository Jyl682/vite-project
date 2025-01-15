import "./Navbar.css";

const menuItems = [
  { name: "About", href: "/" },
  { name: "News", href: "news" },
  { name: "Assets", href: "assets" },
  { name: "Partners", href: "partners" },
  { name: "Download Toolkit", href: "download", extraClass: "leaf-download" },
];

export default function NavBar() {
  return (
    <nav className="navbar h-24" aria-label="Main navigation">
      <div className="w-full fixed h-2 bg-gradient-to-r from-[#0010A3] to-[#A900E8] z-20"></div>
      <div className="flex w-full fixed bg-white justify-between px-[5%] z-10">
        <a className="logo py-3" href="./"> 
          <img
            src="/image.png"
            alt="Access to Justice & Technology Logo"
            className="ml-4 mt-2 w-24"
          />
        </a>
        <ul className="nav-menu flex">
          <div className="main-menu-header">
            <h1>MENU</h1>
          </div>
          {menuItems.map((item, index) => (
            <li key={index} className={`leaf ${item.extraClass || ""}`}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
