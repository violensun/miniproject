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
    
)

export default Navbar

export function getServerSideProps({ req, res }) {
   return { props: { token: req.cookies.token || "" } };
}