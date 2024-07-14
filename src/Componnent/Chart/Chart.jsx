import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart() {
  const mydata = {
    customers: [
      { id: 1, name: "Ahmed Ali" },
      { id: 2, name: "Aya Elsayed" },
      { id: 3, name: "Mina Adel" },
      { id: 4, name: "Sarah Reda" },
      { id: 5, name: "Mohamed Sayed" },
    ],
    transactions: [
      { id: 1, customer_id: 1, date: "2022-01-01", amount: 1000 },
      { id: 2, customer_id: 1, date: "2022-01-02", amount: 2000 },
      { id: 3, customer_id: 2, date: "2022-01-01", amount: 550 },
      { id: 4, customer_id: 3, date: "2022-01-01", amount: 500 },
      { id: 5, customer_id: 2, date: "2022-01-02", amount: 1300 },
      { id: 6, customer_id: 4, date: "2022-01-01", amount: 750 },
      { id: 7, customer_id: 3, date: "2022-01-02", amount: 1250 },
      { id: 8, customer_id: 5, date: "2022-01-01", amount: 2500 },
      { id: 9, customer_id: 5, date: "2022-01-02", amount: 875 },
    ],
  };
  return (
    <div className="Linechart">
      <div className="Respons">
        <ResponsiveContainer width="99%" height={400}>
          <LineChart
            data={mydata.transactions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis style={{ fill: "#d2e3c8" }} dataKey="date" />
            <YAxis style={{ fill: "#d2e3c8" }} />
            <Tooltip
              contentStyle={{
                background: "#4f6f52",
                borderRadius: "5px",
                border: "none ",
                color: "#d2e3c8",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
              labelStyle={{ color: "#d2e3c8" }}
              cursor={{ fill: "none" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#d2e3c8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
