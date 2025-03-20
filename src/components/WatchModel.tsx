// import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { Box, useTexture } from '@react-three/drei';

// export function WatchModel() {
//   const watchRef = useRef();

//   useFrame((state) => {
//     if (watchRef.current) {
//       watchRef.current.rotation.y += 0.005;
//     }
//   });

//   // Since we can't load an external GLTF model, we'll create a stylized watch-like shape
//   return (
//     <group ref={watchRef} dispose={null}>
//       {/* Watch case */}
//       <Box args={[2, 2, 0.5]} position={[0, 0, 0]}>
//         <meshStandardMaterial
//           color="#silver"
//           metalness={0.9}
//           roughness={0.1}
//         />
//       </Box>
      
//       {/* Watch face */}
//       <Box args={[1.8, 1.8, 0.1]} position={[0, 0, 0.3]}>
//         <meshStandardMaterial
//           color="#white"
//           metalness={0.1}
//           roughness={0.2}
//         />
//       </Box>
      
//       {/* Watch crown */}
//       <Box args={[0.2, 0.2, 0.2]} position={[1.1, 0, 0]}>
//         <meshStandardMaterial
//           color="#silver"
//           metalness={0.9}
//           roughness={0.1}
//         />
//       </Box>
//     </group>
//   );
// }