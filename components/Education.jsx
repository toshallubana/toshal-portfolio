import clsx from "clsx";

const Education = () => {
    const isLast = true
    return (
        <div className="px-20">
            <div className="">
                <p className="text-6xl">Experience</p>
                <p className="text-4xl">i love what i do</p>
            </div>
            <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-8">                  
                <li class="mb-10 ml-4 flex flex-col">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">janurary, 2022 - present</time>
                        <div className="flex mt-4">
                            <div>
                                <img src="/images/avizva.png" className="w-[6rem] h-[6rem]"/>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-2xl text-grey-light">Frontend Engineer</h1>
                                <p className="text-xl text-grey-light">Avizva</p>
                                <p className="text-xl text-grey-light">Gurgoan, india</p>
                            </div>
                        </div>
                    </div>
                    
                </li>
                <li class="mb-10 ml-4 flex flex-col">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">janurary, 2021 - janurary, 2022</time>
                        <div className="flex mt-4">
                            <div>
                                <img src="/images/shinedezign.png" className="w-[6rem] h-[6rem]"/>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-2xl text-grey-light">Frontend Engineer</h1>
                                <p className="text-xl text-grey-light">Shine Dezign</p>
                                <p className="text-xl text-grey-light">Mohali, india</p>
                            </div>
                        </div>
                    </div>
                    
                </li>
                <li class="mb-10 ml-4 flex flex-col">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">october, 2022 - janurary, 2021</time>
                        <div className="flex mt-4">
                            <div>
                                <img src="/images/busibud.jpeg" className="w-[6rem] h-[6rem]"/>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-2xl text-grey-light">Frontend Engineer</h1>
                                <p className="text-xl text-grey-light">Busibud</p>
                                <p className="text-xl text-grey-light">Mohali, india</p>
                            </div>
                        </div>
                    </div>
                    
                </li>
            </ol>

        </div>
    )
}
export default Education;