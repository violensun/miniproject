import Link from 'next/link'

const Navbar = token => (
   console.log(token.links),
<aside className="w-64 fixed left-0 top-0 h-full" aria-label="Sidebar">
   <div className="overflow-y-auto py-4 px-3 bg-sec text-fth rounded dark:bg-gray-800 h-full">
      <ul className="space-y-2">
         <li>
            <Link href="/">
            <a  className="flex items-center p-2 text-base font-normal text-fth rounded-lg dark:text-white hover:bg-trd hover:text-black dark:hover:bg-gray-700">
               <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </a>
            </Link>
            
         </li>
         <li>
            <Link href="/register">
            <a  className="flex items-center p-2 text-base font-normal text-fth rounded-lg dark:text-white hover:bg-trd hover:text-black dark:hover:bg-gray-700">
               <span className="flex-1 ml-3 whitespace-nowrap">Register</span>
            </a>
            </Link>
            
         </li>
         {token.links ? (
            <li>
               <Link href="/logout">
               <a  className="flex items-center p-2 text-base font-normal text-fth rounded-lg dark:text-white hover:bg-trd hover:text-black dark:hover:bg-gray-700">
               <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </a>
               </Link>
         </li>
         ): (
            <li>
            <Link href="/login">
            <a className="flex items-center p-2 text-base font-normal text-fth rounded-lg dark:text-white hover:bg-trd hover:text-black dark:hover:bg-gray-700">
            <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
            </a>
            </Link>
            
         </li> 
          )
            
         }
         <li>
            <Link href="/profile">
            <a  className="flex items-center p-2 text-base font-normal text-fth rounded-lg dark:text-white hover:bg-trd hover:text-black dark:hover:bg-gray-700">
               <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </a>
            </Link>
            
         </li>
      </ul>
   </div>
</aside>
    
)

export default Navbar

export function getServerSideProps({ req, res }) {
   return { props: { token: req.cookies.token || "" } };
}