
export const Button = ({ label }) => {
    return <div>
        <button className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:underline focus:outline-none focus:ring-gray-300 font-thin rounded-full text-sm p-2 px-8 py-3 -mt-2">
            {label}
        </button>
    </div>
}