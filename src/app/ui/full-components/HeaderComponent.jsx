

import { links } from "../../const/navbar";
import Link from 'next/link'

export default function HeaderComponent() {
  // console.log(links);
  
  
  return (
    
    
    <div className="flex gap-24 justify-around">
      <h1 className="">Blog Template</h1>
      {links.map((link) => (
        <span key={link.nombre} className="sm:p-4 ">
          <Link href={link.enlace} className="">
            <span className="">{link.logo}</span>
            <span className="">{link.nombre}</span>
          </Link>
        </span>
      ))}
    </div>
 
  );
}