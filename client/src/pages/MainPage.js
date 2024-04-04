import React from 'react'
import { useState } from 'react'

export default function MainPage() {

    const [date, setDate] = useState(null);
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
    const [amountInTargetCurrency, setamountInTargetCurrency] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            date,
            sourceCurrency,
            targetCurrency,
            amountInSourceCurrency
        );
    }

    return (
        <>
            <div>
                <h1 className='lg:mx-32 text-5xl font-bold text-blue-500'>Convert Your currencies Today </h1>
                <p className='lg:mx-32 opacity-70 py-6'>You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but  reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:</p>
            </div>

            <div className='mt-5 flex items-center justify-center flex-col'>
                <section className='w-full lg:w-1/2'>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label
                                htmlFor={date}
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                id={date}
                                name={date}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-4">
                            <label
                                htmlFor={sourceCurrency}
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                            <select
                                onChange={(e) => setSourceCurrency(e.target.value)}
                                name={sourceCurrency}
                                id={sourceCurrency}
                                value={sourceCurrency}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                <option value="">Select Source Currency</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label
                                htmlFor={targetCurrency}
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                            <select
                                onChange={(e) => setTargetCurrency(e.target.value)}
                                name={targetCurrency}
                                id={targetCurrency}
                                value={targetCurrency}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                <option value="">Select target Currency</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label
                                htmlFor={amountInSourceCurrency}
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source currency</label>
                            <input
                                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                                type='number'
                                name={amountInSourceCurrency}
                                id={amountInSourceCurrency}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Amount" required />
                        </div>
                        <button  className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md mt-2'>
                            {" "}
                            Get the target Currency
                        </button>
                    </form>
                </section>
            </div>

        </>

    )
}
