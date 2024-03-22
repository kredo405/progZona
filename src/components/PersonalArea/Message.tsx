const Message = () => {
    return (
        <div className="flex justify-between items-start md:items-center bg-[#31343b] mt-5 rounded-lg">
            <div className="px-2 md:px-3 py-2 md:py-3 flex justify-center md:items-center">
                <img
                    className="md:w-6/12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <div className="flex flex-col">
                <h5 className="font-mono font-semibold px-2 py-2 text-slate-100">
                    Александр
                </h5>
                <p className="font-mono text-slate-200 px-2 py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure atque, repudiandae, quaerat tenetur voluptatum corrupti
                    sapiente vero exercitationem dicta commodi recusandae
                    impedit eveniet, deserunt est voluptatem qui laborum.
                    Corporis, aliquid.
                </p>
            </div>
        </div>
    );
};

export default Message;
