import React from "react";
import Link from "next/link";  //not relode website  it is fast 

const Header = (props) => {
  return (
    <div className=" h-20 flex bg-green-500 px-10 justify-between items-center">
      <h2>logo :{props.user}</h2>
      <div className="flex gap-10">
        {/* <a href='/About'>about</a>
                <a href=''>career</a>
                <a href=''>blog</a>
                <a href=''>account</a> */}

        <Link href="/About">about</Link>
        <Link href="">career</Link>
        <Link href="">blog</Link>
        <Link href="">account</Link>
      </div>
    </div>
  );
};
export default Header;
