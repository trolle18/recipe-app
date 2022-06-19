import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';


export default function Categories() {

    return (
        <>
            <section className='categories'>
                <NavLink to={'/cuisine/italian'} className="category-link">
                    <FaPizzaSlice/>
                    <h4>Italian</h4>
                </NavLink>

                <NavLink to={'/cuisine/american'} className="category-link">
                    <FaHamburger/>
                    <h4>American</h4>
                </NavLink>

                <NavLink to={'/cuisine/thai'} className="category-link">
                    <GiNoodles/>
                    <h4>Thai</h4>
                </NavLink>

                <NavLink to={'/cuisine/japanese'} className="category-link">
                    <GiChopsticks/>
                    <h4>Japanese</h4>
                </NavLink>
            </section>
        </>
    )
};