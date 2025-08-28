// import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// export default function CookieConsent() {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     // Check if user has accepted cookies
//     const consent = localStorage.getItem('cookieConsent');
//     if (!consent || JSON.parse(consent).accepted === false) {
//       setIsVisible(true);
//     }
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem('cookieConsent', JSON.stringify({ accepted: true }));
//     setIsVisible(false);
//   };

//   const handleDecline = () => {
//     localStorage.setItem('cookieConsent', JSON.stringify({ accepted: false }));
//     // Don't persist decline state, just hide the banner temporarily
//     setIsVisible(false);
//     // Show banner again after page refresh
//     localStorage.removeItem('cookieConsent');
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-t border-border">
//       <div className="container mx-auto py-4 px-4">
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-muted-foreground mb-0">
//             We use cookies to enhance your browsing experience. By clicking "Accept", you consent to our use of cookies. Read our <Link to="/legal/privacy-policy" className="underline hover:text-foreground">Privacy Policy</Link> to learn more.
//           </p>
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleDecline}
//               className="whitespace-nowrap"
//             >
//               Decline
//             </Button>
//             <Button
//               variant="default"
//               size="sm"
//               onClick={handleAccept}
//               className="bg-[#0361DA] hover:bg-[#0361DA]/80 text-white hover:text-white whitespace-nowrap"
//             >
//               Accept
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
