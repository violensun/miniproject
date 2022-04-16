import Link from 'next/link'

const Navbar = token => (
   console.log(token.links),
<aside className="w-64" aria-label="Sidebar">
   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
         <li>
            <Link href="/">
            <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </a>
            </Link>
            
         </li>
         <li>
            <Link href="/register">
            <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="flex-1 ml-3 whitespace-nowrap">Register</span>
            </a>
            </Link>
            
         </li>
         {token.links ? (
            <li>
               <Link href="/logout">
               <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </a>
               </Link>
         </li>
         ): (
            <li>
            <Link href="/login">
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
            </a>
            </Link>
            
         </li> 
          )
            
         }
         <li>
            <Link href="/profile">
            <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </a>
            </Link>
            
         </li>
      </ul>
   </div>
</aside>

    // <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
    //     <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><a> Home </a></Link> |
    //     <Link href="/register" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><a> Register </a></Link>  |
    //     <Link href="/login" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><a> Login </a></Link> |
    //     <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><a> Profile </a></Link> | 
    //     <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><a> Logout </a></Link> 
    // </div>
    
    
)

export default Navbar

export function getServerSideProps({ req, res }) {
   return { props: { token: req.cookies.token || "" } };
}