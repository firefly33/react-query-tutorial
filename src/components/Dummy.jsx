
function Dummy(props) {
    const { dummy } = props
    
    if (!dummy) return
    return (
        <div className="flex flex-col gap-2 p-2 border-2 border-solid rounded-lg text-cyan-900 bg-cyan-500">
            <span>Title : {dummy.title}</span>
            <span>Description : {dummy.description}</span>
            <hr className='h-[2px] border-2 border-gray-300' />
            <section className='flex flex-wrap justify-center gap-2'>
                {dummy?.images.map((img) => {
                  return (
                    <img key={img} className='w-[6rem] rounded-lg' src={img} />
                  )
                })}
            </section>
        </div>
    )
}

export default Dummy