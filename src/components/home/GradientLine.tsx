const GradientLine: React.FC = () => {
  return (
    <div
      className={
        'absolute z-10 ml-[40px] mt-[100px] text-white-100 select-none'
      }
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
        <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
      </div>
    </div>
  )
}

export default GradientLine
