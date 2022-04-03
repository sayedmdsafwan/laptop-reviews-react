import React from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Dashboard = () => {
    const shopDetails = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401,
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500,
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010,
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405,
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900,
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000,
        },
    ];

    return (
        <div className="w-4/5 mx-auto py-8">
            <div className="flex">
                <div>
                    <h1>Dashboard</h1>
                    <LineChart
                        width={600}
                        height={300}
                        data={shopDetails}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <AreaChart
                        width={500}
                        height={400}
                        data={shopDetails}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="sell"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
