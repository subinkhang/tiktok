// import { useEffect, useState } from "react"


// function Content() {

//     const [avatar, setAvatar] = useState()

//     useEffect(() => {
//         //Cleanup F
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     }, [avatar])

//     const handleAvatar = (e) => {
//         const file = e.target.files[0]

//         file.preview = URL.createObjectURL(file)

//         setAvatar(file)
//     }

//     return(
//         <div>
//             <input 
//                 type="file"
//                 onChange={handleAvatar}
//             />
//             {avatar && (
//                 <img
//                     src={avatar.preview}
//                     alt='kk'
//                     width='80%'
//                 />
//             )}
//         </div>
//     )
// }

// export default Content

import { useState } from "react"
import { useEffect } from "react"

function Content() {

    const [count, setCount] = useState(1)
    
    useEffect(() => {
        console.log(`Mount lần ${count}`);

        return(() => {
            console.log(`Cleanup lần ${count}`);
        })

    }, [count])

    return(
        <div>
            <h1>{count}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >Click me</button>
        </div>
    )
}

export default Content
