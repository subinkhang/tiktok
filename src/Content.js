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

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    // const [tabs, setTabs] = useState('posts')
    const [types, setTypes] = useState('posts')

    console.log(types);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${types}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [types])

    useEffect(() => {
        document.title = title;
    })

    return(
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={types===tab ? {
                        color: "white",
                        backgroundColor: "black"
                    } : {}}
                    onClick={() => setTypes(tab)}
                >
                    {tab}
                </button>
            ))}
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content
