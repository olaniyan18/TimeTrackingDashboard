/** @format */
import Data from "./data.json";
import Container from "./component/Container";
export default function App() {
  return (
    <div className='App'>
      {/* {Data.map((data) => {
        return (
          <div key={data.title} className='data'>
            <h4>{data.title}</h4>
            {data.timeframes.daily.current}
          </div>
        );
      })} */}
      <Container />
    </div>
  );
}
