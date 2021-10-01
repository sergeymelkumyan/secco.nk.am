import React from "react"
import Loader from "../Loader"

const Page = ({title, className = '', children, loading = false}) => {
    return !loading ? (
        <div className={"content " + className}>
            {title && <h2 className={'title'}>{title}</h2>}
            {children}
        </div>
    ) : <Loader/>
}

export default Page
