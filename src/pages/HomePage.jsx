import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
import MainCourses from "../components/MainCourses";

export default function HomePage() {

    return (
        <>
            <motion.div 
                animate={ {opacity: 1} }
                initial={ {opacity: 0} }
                exit={ {opacity: 0} }
                transition={ {duration: 0.5} }>
        
                <MainCourses/>
                <Popular/>
                <Veggie/>
            </motion.div>
        </>
    )

}