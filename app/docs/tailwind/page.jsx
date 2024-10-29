import React from 'react'
import { markdown } from './docs.mdx'
const Docs = () => {
    return (
        <div>
            <article class="prose lg:prose-xl">{{ markdown }}</article>
        </div>
    )
}

export default Docs
