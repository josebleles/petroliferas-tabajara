import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useAppContext } from '../../context/AppWrapper';

const Toaster = ({title, message, status}) => {
	const {state, dispatch} = useAppContext()

    useEffect(()=> {
        setTimeout(()=> {dispatch({type: "HIDE_TOASTER"})}, 1000)
    }, [])

    const color = status == "error"? "red" : status == "success"? "green" : "yellow";
    return <div className="absolute top-10 right-10 opacity-80 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
            <div className={`flex items-center justify-center w-12 bg-${color}-500`}>
                {status == "success"? 
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
                </svg>
                :
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
                </svg>
                }
            </div>
            
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className={`font-semibold text-${color}-500 dark:text-${color}-400`}>{title}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">{message}</p>
                </div>
            </div>
        </div>;
}

export default Toaster;