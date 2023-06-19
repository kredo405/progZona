import { Nav } from "../components/MainLanding/Nav";
import contacts from "../assets/contacts.png";
import contacts1 from "../assets/contacts1.png";

const Contacts = () => {
    return (
        <>
            <Nav current="contacts" />
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl font-mono">
                    Контакты
                </h2>
                <p className="mt-2 text-lg leading-8 text-slate-200 font-mono">
                    Не стесняйтесь обращаться к нам по любым вопросам, мы всегда
                    готовы помочь!
                </p>
            </div>
            <div className="flex justify-center px-2">
                {/* <div className="hidden md:flex justify-end items-start w-2/12">
                    <img src={contacts1} alt="Контакты" />
                </div> */}
                <div className=" px-6 lg:px-8 w-full md:w-8/12">
                    <form className="mx-auto max-w-xl sm:mt-10">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-mono font-semibold leading-6 text-slate-100"
                                >
                                    Имя
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full font-mono rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-mono font-semibold leading-6 text-slate-100"
                                >
                                    Фамилия
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full font-mono rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-mono font-semibold leading-6 text-slate-100"
                                >
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full font-mono rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-mono font-semibold leading-6 text-slate-100"
                                >
                                    Сообщение
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full font-mono rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full font-mono rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
                {/* <div className="hidden  md:flex justify-center items-end w-2/12">
                    <img src={contacts} alt="Контакты" />
                </div> */}
            </div>
        </>
    );
};

export default Contacts;
