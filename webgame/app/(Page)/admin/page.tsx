"use client"

import LayoutAdmin from "@/app/Components/Layout/admin/admin";
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function adminPage() {
    return (
        <LayoutAdmin>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <div className="flex justify-between items-center m-16 ">
                    <h1 className="text-lg font-medium text-[#1F384C]">แดชบอร์ด</h1>
                </div>
                <div className="w-full h-full p-20">
                    <LineChart
                        width={500}
                        height={300}
                        series={[
                            { data: pData, label: 'pv' },
                            { data: uData, label: 'uv' },
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </div>
            </div>
        </LayoutAdmin>
    )
}