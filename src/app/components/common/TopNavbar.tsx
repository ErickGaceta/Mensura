export default function TopNavbar() { 
    return (
        <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Logo</h2>
            <div>
                <a href="#" className="hover:text-gray-400 mx-2">Home</a>
                <a href="#" className="hover:text-gray-400 mx-2">About</a>
                <a href="#" className="hover:text-gray-400 mx-2">Settings</a>
                <a href="#" className="hover:text-gray-400 mx-2">Account</a>
            </div>
        </div>
    );
}