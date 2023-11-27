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

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [])

    useEffect(() => {
        document.title = title;
    })

    return(
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content
