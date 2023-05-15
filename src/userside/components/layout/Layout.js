
import Sidebar from "../Sidebar";

function Layout({ children }) {
    return (
        <div className="custom-container  ">
            <div className='main  align-items-center  w-100 h-100 gap-4 rounded-5 overflow-hidden p-md-5'>
                <div className='main sidebar     rounded-5 '>
                    <div className=' d-flex justify-content-start  p-md-2 '>
                        <Sidebar />
                    </div>
                </div>
                <div className='right-content'>{children}</div>
            </div>
        </div>
    );
}
export default Layout;