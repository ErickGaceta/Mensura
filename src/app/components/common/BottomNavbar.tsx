export default function BottomNavbar() { 
    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-around">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Profile</a>
            <a href="#" className="hover:text-gray-400">Settings</a>
            <a href="#" className="hover:text-gray-400">Logout</a>
        </div>
    );
}