import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-pink-700 my-12'>Our Courses</h2>
            <div className='grid lg:grid-cols-3 gap-4'>
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
        </div>
    );
};

export default Courses;