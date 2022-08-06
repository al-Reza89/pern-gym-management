// import Chart from "../../components/chart/Chart";
// import Featured from "../../components/featured/Featured";
import HomeTable from "../../components/homeTable/HomeTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets" >
          <Widget type="user" color="#6EC8FA"/>
          <Widget type="instructor" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div style={{height:'50px'}}/>
        {/* <div className="charts">
          <Featured />
          <Chart />
        </div> */}
        <div className="listContainer" style={{backgroundColor:'#8516DC'}}>
          <div className="listTitle">Latest Admitted</div>
          <HomeTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
