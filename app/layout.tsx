import type { Metadata } from "next";
import "./style.css";
export const metadata: Metadata={title:"Viral Video Engine",description:"AI-ready viral video optimization studio"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}