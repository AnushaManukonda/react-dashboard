import React from "react";
import profileicon from "../src/assets/profileicon.png";
import {
  FcDoughnutChart,
  FcAutomatic,
  FcPodiumWithAudience,
  FcPackage,
  FcCurrencyExchange,
  FcDeleteColumn,
  FcShipped,
  FcDataRecovery,
} from "react-icons/fc";
import {
  BsTriangleFill,
  BsCaretDownFill,
  BsFillArchiveFill,
  BsChevronRight,
  BsFilePersonFill,
  BsFillStarFill,
  BsStar,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
function Home() {
  const data = [
    {
      name: "5",
      uv: 5000,
      pv: 2400,
      mv: 2500,
      amt: 2400,
    },
    {
      name: "9",
      uv: 4000,
      pv: 2498,
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
          <div className="card">
            <div className="card-inner">
              <FcDataRecovery className="icon-size" />
              <p>Total Orders</p>
            </div>
            <div className="num-percentage">
              <h1>75</h1>
              <div className="icon-percentage">
                <BsTriangleFill className="icon" />
                <p>3%</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <FcShipped className="icon-size" />
              <p>Total Delivered</p>
            </div>
            <div className="num-percentage">
              <h1>70</h1>
              <div className="icon-percentage2">
                <BsCaretDownFill className="icon" />
                <p>3%</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <FcDeleteColumn className="icon-size" />
              <p>Total Cancelled</p>
            </div>
            <div className="num-percentage">
              <h1>05</h1>
              <div className="icon-percentage">
                <BsTriangleFill className="icon" />
                <p>3%</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <FcCurrencyExchange className="icon-size" />
              <p>Total Revenue</p>
            </div>
            <div className="num-percentage">
              <h1>$12k</h1>
              <div className="icon-percentage2">
                <BsCaretDownFill className="icon" />
                <p>3%</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <p>Net Profit</p>
              <div className="heading-icon">
                <h3>$6759.25</h3>
                <FcDoughnutChart className="circle-icon" />
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

          {/* <div className="activity">
            <p>activity</p>
            <button>weekly</button>
          </div> */}
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
                    <FcAutomatic className="icon-size" />
                    <p className="goal-text">Goals</p>
                  </div>
                  <BsChevronRight className="icon" />
                </div>
                <div className="card-goal">
                  <div className="goals-icon">
                    <FcPodiumWithAudience className="icon-size" />
                    <p className="goal-text">Popular Dishes</p>
                  </div>
                  <BsChevronRight className="icon" />
                </div>
                <div className="card-goal">
                  <div className="goals-icon">
                    <FcPackage className="icon-size" />
                    <p className="goal-text">Menus</p>
                  </div>
                  <BsChevronRight className="icon" />
                </div>
              </div>
            </ResponsiveContainer>
          </div>

          <div className="order-section">
            <ResponsiveContainer width="100%" height="100%">
              <div>
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
                    <tr>
                      <td>
                        <div className="profile-name">
                          <img
                            src={profileicon}
                            alt="Profile Icon"
                            className="profile-icon"
                          />
                          <p className="customer-name"> Wade Warren</p>
                        </div>
                      </td>
                      <td>15478256</td>
                      <td>$124.00</td>
                      <td>
                        <span class="delivery-status1">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="profile-name">
                          <img
                            src={profileicon}
                            alt="Profile Icon"
                            className="profile-icon"
                          />
                          <p className="customer-name">Jane Cooper</p>
                        </div>
                      </td>
                      <td>49896798</td>
                      <td>$305.02</td>
                      <td>
                        <span class="delivery-status1">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="profile-name">
                          <img
                            src={profileicon}
                            alt="Profile Icon"
                            className="profile-icon"
                          />
                          <p className="customer-name"> Guy Hawkins</p>
                        </div>
                      </td>
                      <td>78095215</td>
                      <td>$45.88</td>
                      <td>
                        <span class="delivery-status2">Cancelled</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="profile-name">
                          <img
                            src={profileicon}
                            alt="Profile Icon"
                            className="profile-icon"
                          />
                          <p className="customer-name">Kristin Watson</p>
                        </div>
                      </td>
                      <td>20965732</td>
                      <td>$65.00</td>
                      <td>
                        <span class="delivery-status2">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="profile-name">
                          <img
                            src={profileicon}
                            alt="Profile Icon"
                            className="profile-icon"
                          />
                          <p className="customer-name"> Cody Fisher</p>
                        </div>
                      </td>
                      <td>95715620</td>
                      <td>$745.00</td>
                      <td>
                        <span class="delivery-status1">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="profile-name">
                          <img
                            src={profileicon}
                            alt="Profile Icon"
                            className="profile-icon"
                          />
                          <p className="customer-name">Savannah Nguyen</p>
                        </div>
                      </td>
                      <td>78514568</td>
                      <td>$128.20</td>
                      <td>
                        <span class="delivery-status1">Delivered</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ResponsiveContainer>
          </div>
          <div className="star-rating">
            <ResponsiveContainer width="100%" height="100%">
              {/* <div> */}
              <h3>customer's Feedback</h3>
              <div className="feedback-1">
                <div className="profile-name">
                  <img
                    src={profileicon}
                    alt="Profile Icon"
                    className="profile-icon"
                  />
                  <h5 className="customer-name">Jenni wilson</h5>
                </div>
                <div className="stars">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsStar className="last-star" />
                </div>
                <p className="review">
                  The food was not only hot and fresh but also packed securely
                  to maintain its quality. The dishes were bursting with flavor
                  and clearly made with high-quality ingredients
                </p>
              </div>
              <div className="feedback-1">
                <div className="profile-name">
                  <img
                    src={profileicon}
                    alt="Profile Icon"
                    className="profile-icon"
                  />
                  <h5 className="customer-name">Jenni wilson</h5>
                </div>
                <div className="stars">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <p className="review">
                  The delivery was impressively prompt, arriving well within the
                  estimated time frame
                </p>
              </div>
              <div className="feedback-1">
                <div className="profile-name">
                  <img
                    src={profileicon}
                    alt="Profile Icon"
                    className="profile-icon"
                  />
                  <h5 className="customer-name">Jenni wilson</h5>
                </div>
                <div className="stars">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsStar className="last-star" />
                </div>
                <p className="review">
                  Delivered with a smile and amazing flavor!
                </p>
              </div>
              {/* </div> */}
            </ResponsiveContainer>
          </div>
        </div>

        <div className="orders"></div>
      </main>
    </>
  );
}

export default Home;
