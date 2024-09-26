const Input = () => {
    return (
        <>
            <div>
                <div className="flex justify-center mb-3">
                    <h2 className="text-cyan-600 hover:text-purple-700 mt-4 font-bold">todo project</h2>
                </div>
                <div>
                    <form className="flex flex-row-reverse justify-center gap-2 mb-3">
                        <input type="submit" value="ثبت" className="bg-green-700 text-white py-1 px-4 rounded-md cursor-pointer" />
                        <input type="text" className="py-1 px-4 rounded-md border border-gray-500 w-full" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Input