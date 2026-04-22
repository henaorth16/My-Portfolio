
const Title = ({title}) => {
  return (
    <>
      <h2 className="m-2 ml-[10%] text-2xl text-primary-500 font-bold">
               {title}
            </h2>
            <hr className="w-[80%] mx-auto mb-6 opacity-30" />
    </>
  )
}
export function MainParagraph({text}) {
  return <p className="text-secondary-300 my-6 lg:px-[10%]">
    {text}
  </p>
}
export function MainTitle({title}) {
  return <h1 className='text-primary-500 text-3xl text-center font-semibold mt-20'>{title}</h1>
    
}
export default Title
