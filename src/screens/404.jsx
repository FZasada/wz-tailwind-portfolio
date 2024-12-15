import { Link } from "react-router-dom"


const PageNotFound = () => {
  return (
    <div className='w-full pt-20 items-center text-center'>
        <h1 className='text-5xl text-primary font-bold my-4'>Oops...404!</h1>
        <p className='text-xl mb-8 font-semibold'>It seems as You have reached the unexplored sides of this portfolio...</p>
        <p className='text-xl mb-8'>Go back on the main track <Link to="/" className="text-primary underline">here!</Link></p>
    </div>
  )
}

export default PageNotFound
