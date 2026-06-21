export default function Sidebar() { 
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Logo</h2>
            <ul>
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Profile</a></li>
            </ul>
            <ul>
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Settings</a></li>
                <li><a href="#" className="hover:text-gray-400">Logout</a></li>
            </ul>
        </div>
    );
}