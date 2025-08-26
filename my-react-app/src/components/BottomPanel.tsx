import React, { useEffect, useRef } from 'react';
import { Card, Tabs, Space } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';

const Chart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;
        let chart: echarts.ECharts | undefined;

        try {
            chart = echarts.init(chartRef.current);
            const option = {
                grid: { top: 40, right: 20, bottom: 30, left: 40 },
                tooltip: { trigger: 'axis' },
                legend: { data: ["IoU", "mAP"], right: 10 },
                xAxis: { type: "category", data: Array.from({ length: 12 }, (_, i) => `T${i + 1}`) },
                yAxis: { type: "value", min: 0, max: 100, axisLabel: { formatter: '{value}%' } },
                series: [
                    { name: "IoU", type: "line", smooth: true, data: [60, 62, 65, 66, 68, 70, 72, 74, 76, 78, 80, 82] },
                    { name: "mAP", type: "bar", data: [55, 57, 59, 60, 63, 66, 68, 69, 71, 73, 75, 77] },
                ],
            };
            chart.setOption(option);

            const onResize = () => chart?.resize();
            window.addEventListener("resize", onResize);

            return () => {
                window.removeEventListener("resize", onResize);
                chart?.dispose();
            };
        } catch (error) {
            console.error("ECharts initialization failed:", error);
            if (chart) {
                chart.dispose();
            }
        }
    }, []);

    return <div ref={chartRef} style={{ height: 200, width: '100%' }} />;
}

const BottomPanel: React.FC = () => {
    return (
        <div style={{ position: "absolute", bottom: 0, left: 16, right: 16, zIndex: 5 }}>
            <Card size="small" bodyStyle={{padding: '0 8px'}}>
                <Tabs
                    defaultActiveKey="charts"
                    items={[
                        {
                            key: "charts",
                            label: <Space><BarChartOutlined />Charts</Space>,
                            children: <Chart />
                        },
                        {
                            key: "logs",
                            label: "Logs",
                            children: <pre style={{height: 200, overflowY: 'auto', fontSize: 11, margin: 0}}>[12:01:02] Simulation started.\n[12:01:03] Container parameters updated.\n[12:01:05] Camera position adjusted.</pre>
                        },
                    ]}
                />
            </Card>
        </div>
    );
};

export default BottomPanel;
