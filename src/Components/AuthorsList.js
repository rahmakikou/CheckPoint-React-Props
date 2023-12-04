 
import authors from "../authors"
import Author from "./Author" 
 
 const AuthorsList=()=>{
     return(
         <div>
             <h2>My favorite authors around the world</h2>
             <div className="cards">
             {
                 authors.map((el,i,t)=> <Author key={i} el={el}/>)
             }
             </div>
         </div>
     )
 }
 
 export default AuthorsList 