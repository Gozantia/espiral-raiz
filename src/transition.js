import React from 'react';
import { motion} from 'framer-motion'

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
            className="slide-in"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} />
            
            <motion.div
            className="slide-out"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} />
        </>
    )

}
export default transition