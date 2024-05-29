import "./featured.css";
import "../../hooks/useFetch"
import useFetch from "../../hooks/useFetch";


const Featured = () => {

  const{data, loading, error, } = useFetch("/hotels/countByCity?cities=Berlin,Dubai,London")
  console.log(data)

  return (
    <div className="featured">
      {loading?(
        "Loading please wait"
      ):(
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/268px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dubai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.edrawmind.com/article/london-bridge-history/800_531.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
