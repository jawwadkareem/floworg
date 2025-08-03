// import React from 'react';
// import { Card, CardContent } from './ui/card';
// import { Mic } from 'lucide-react';

// const HoverCard = () => {
//   return (
//     <div className="relative w-64 h-40 group">
//       {/* Orange background behind the card */}
//       <div className="absolute inset-0 bg-orange-500 transform rotate-6 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"
//         style={{ backgroundColor: '#1ad7ad' }}
//       ></div>

//       {/* Foreground card */}
//       <Card className="relative z-10 w-full h-full cursor-pointer transition-all duration-300 hover:shadow-lg bg-white">
//         <CardContent className="p-6 h-full flex flex-col items-center justify-center">
//           <Mic className="w-8 h-8 mb-3 text-primary" />
//           <h3 className="text-lg font-semibold text-foreground">Voice</h3>
//           <p className="text-sm text-muted-foreground mt-1">Speech recognition</p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default HoverCard;
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const HoverCard = () => {
  return (
    <motion.div
      className="relative w-64 h-40 group"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Hover-only cyclic animated green background */}
      <motion.div
        className="absolute inset-0 rounded-xl z-0"
        variants={{
          rest: { opacity: 0, rotate: 6, scale: 1.05 },
          hover: {
            opacity: 1,
            rotate: [6, 9, 6],
            scale: [1.05, 1.1, 1.05],
            transition: {
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            },
          },
        }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: '#1ad7ad' }}
      />

      {/* Foreground card */}
      <Card className="relative z-10 w-full h-full cursor-pointer transition-all duration-300 hover:shadow-lg bg-white">
        <CardContent className="p-6 h-full flex flex-col items-center justify-center">
          <Mic className="w-8 h-8 mb-3 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Voice</h3>
          <p className="text-sm text-muted-foreground mt-1">Speech recognition</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HoverCard;
