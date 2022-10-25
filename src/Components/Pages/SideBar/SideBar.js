import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ categories }) => {
    console.log(categories);
    return (
        <div>
            <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2>
                        <div className="flex flex-col space-y-1">
                            {
                                categories?.map(category => <Link key={category.id}>{category.name}</Link>)
                            }
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;