import { useAppDispatch } from '@/hooks/useStore'
import { useAppSelector } from '@/hooks/useStore'
import { add, sub } from '@/store/slices/testSlice'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const testReducer = useAppSelector((state) => state.testReducer)
  const testValue = testReducer.testValue

  function addSliceHandler(value: number) {
    dispatch(add(value))
  }

  function subSliceHandler(value: number) {
    dispatch(sub(value))
  }

  return (
    <div className="mt-[80px]">
      <h1>This is New Home Page</h1>
      <br />
      <h3>Test Redux Data Flow</h3>
      <span>
        <div>use add slice to plus one</div>
        <button
          className="border-2 border-blue-600"
          onClick={() => addSliceHandler(1)}
        >
          Click + 1
        </button>
      </span>
      <br />
      <span>
        <div>use sub slice to plus one</div>
        <button
          className="border-2 border-blue-600"
          onClick={() => subSliceHandler(1)}
        >
          Click - 1
        </button>
      </span>
      <br />
      <div className="text-rose-500">Result: {testValue}</div>
    </div>
  )
}

export default Home
