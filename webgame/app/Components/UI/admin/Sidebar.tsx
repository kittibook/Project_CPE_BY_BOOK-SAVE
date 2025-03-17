import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // ใช้ไอคอนจาก react-icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* ปุ่ม Hamburger สำหรับหน้าจอเล็ก */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-blue-100 w-64 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <h2 className="text-xl font-bold mb-4">เมนู</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block p-2 hover:bg-blue-200 rounded">
              หน้าแรก
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-blue-200 rounded">
              โครงการ
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-blue-200 rounded">
              เกี่ยวกับ
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-blue-200 rounded">
              อื่นๆ
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay สำหรับปิด sidebar บนมือถือ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;