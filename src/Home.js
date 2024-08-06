import React from "react";
import profileicon from "../src/assets/profileicon.png";
import {
  BsCaretDownFill,
  BsFillArchiveFill,
  BsChevronRight,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CardItem from "./components/CardItem";
import Ratings from "./components/Ratings";
import ordersList from "../src/const/ordersList.json";
function Home() {
  const data = [
    {
      name: "5",
      uv: 4000,
      pv: 2400,
      mv: 2200,
      amt: 2400,
    },
    {
      name: "9",
      uv: 3000,
      pv: 1398,
      mv: 2100,
      amt: 2210,
    },
    {
      name: "11",
      uv: 2000,
      pv: 9800,
      mv: 2000,
      amt: 2290,
    },
    {
      name: "13",
      uv: 2780,
      pv: 3908,
      mv: 1900,
      amt: 2000,
    },
    {
      name: "15",
      uv: 1890,
      pv: 4800,
      mv: 2200,
      amt: 2181,
    },
    {
      name: "17",
      uv: 2390,
      pv: 3800,
      mv: 2100,
      amt: 2500,
    },
    {
      name: "19",
      uv: 3490,
      pv: 4300,
      mv: 1800,
      amt: 2100,
    },
    {
      name: "21",
      uv: 3490,
      pv: 4300,
      mv: 1900,
      amt: 2100,
    },
    {
      name: "23",
      uv: 3490,
      pv: 4300,
      mv: 2200,
      amt: 2100,
    },
    {
      name: "25",
      uv: 3490,
      pv: 4300,
      mv: 2200,
      amt: 2100,
    },
    {
      name: "27",
      uv: 3490,
      pv: 4300,
      mv: 2200,
      amt: 2100,
    },
  ];

  const formatYAxis = (tickItem) => {
    // Customize the Y-axis tick labels here
    if (tickItem === 10000) return "20k";
    if (tickItem === 7500) return "15k";
    if (tickItem === 5000) return "10k";
    if (tickItem === 2500) return "5k";
    return tickItem;
  };
  return (
    <>
      <main className="main-container">
        <div className="main-title">
          <h3>DASHBOARD</h3>
        </div>

        <div className="main-cards">
          <CardItem
            title={"Total Orders"}
            number={"75"}
            percentage={"3%"}
            trend={"up"}
          />
          <CardItem
            title={"Total Delivered"}
            number={"70"}
            percentage={"3%"}
            trend={"down"}
          />
          <CardItem
            title={"Total Cancelled"}
            number={"05"}
            percentage={"3%"}
            trend={"up"}
          />
          <CardItem
            title={"Total Revenue"}
            number={"$12k"}
            percentage={"3%"}
            trend={"down"}
          />

          <div className="card">
            <div className="card-inner">
              <p>Net Profit</p>
              <div className="heading-icon">
                <h3>$6759.25</h3>
                <BsFillArchiveFill className="card_icon" />
              </div>
            </div>
            <div className="num-percentage3">
              <div className="icon-text">
                <div className="icon-three">
                  <BsCaretDownFill className="icon" />
                  <p>3%</p>
                </div>
                <p className="text">The Values here has been rounded off</p>
              </div>
            </div>
          </div>

          <div className="graph-sec">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                barGap={6}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="0" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={formatYAxis} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pv"
                  fill="rgb(64, 10, 152)"
                  barSize={20}
                  radius={[10, 10, 10, 10]}
                />
                <Bar
                  dataKey="uv"
                  fill="rgb(64, 10, 152)"
                  barSize={20}
                  radius={[10, 10, 10, 10]}
                />
                <Bar
                  dataKey="mv"
                  fill="rgb(64, 10, 152)"
                  barSize={20}
                  radius={[10, 10, 10, 10]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="second-goals-sec">
            <ResponsiveContainer width="100%" height="100%">
              <div className="card">
                <div className="card-goal">
                  <div className="goals-icon">
                    <BsFillArchiveFill className="card_icon" />
                    <p className="goal-text">Goals</p>
                  </div>
                  <BsChevronRight className="icon" />
                </div>
                <div className="card-goal">
                  <div className="goals-icon">
                    <BsFillArchiveFill className="card_icon" />
                    <p>Popular Dishes</p>
                  </div>
                  <BsChevronRight className="icon" />
                </div>
                <div className="card-goal">
                  <div className="goals-icon">
                    <BsFillArchiveFill className="card_icon" />
                    <p>Menus</p>
                  </div>
                  <BsChevronRight className="icon" />
                </div>
              </div>
            </ResponsiveContainer>
          </div>

          <div className="order-section">
            <h3>Recent Orders</h3>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Order No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersList.map((order, index) => {
                  return (
                    <tr key={"order" + index}>
                      <td>
                        <img
                          src={profileicon}
                          alt="Profile Icon"
                          className="profile-icon"
                        />
                        <i class="person-circle"></i> {order.customer_name}
                      </td>
                      <td>{order.order_no}</td>
                      <td>{order.amount}</td>
                      <td>
                        <span class="delivery-status">{order.status}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Ratings />
        </div>
      </main>
    </>
  );
}

export default Home;
