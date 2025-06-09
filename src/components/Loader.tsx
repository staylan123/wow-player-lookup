const Loader = () => {
  return (
    <div className='flex gap-4 justify-center'>
        <img className='animate-bounce [animation-delay:-0.3s]' src='./WoW.svg' height={25} width={25} alt='WoW Logo'/>
        <img className='animate-bounce [animation-delay:-0.15s]' src='./WoW.svg' height={25} width={25} alt='WoW Logo'/>
        <img className='animate-bounce' src='./WoW.svg' height={25} width={25} alt='WoW Logo'/>
    </div>
  )
}

export default Loader