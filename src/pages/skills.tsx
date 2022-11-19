import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import Layout from '@/components/Layout';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const chartData = {
  labels: ['JS/ES6+', 'ReactJS', 'TS', 'UI/UX', 'HTML/CSS', 'SCSS/SASS'],
  datasets: [
    {
      label: 'label',
      data: [9, 9, 4, 7, 7, 9],
      fill: true,
      backgroundColor: '#0f766e60',
      borderColor: '#0d9488',
      pointBackgroundColor: '#0d9488',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#0d9488',
      borderWidth: 3,
    },
  ],
};
const chartOptions = {
  plugins: {
    legend: { display: false },
    tooltip: {
      displayColors: false,
      callbacks: {
        label: () => {
          return ``;
        },
      },
    },
  },
  scales: {
    Scale: {
      axis: 'r',
      min: 0,
      max: 10,
      title: {
        display: false,
      },
      grid: {
        color: '#404040',
      },
      ticks: {
        color: '#737373',
        showLabelBackdrop: false,
      },
    },
  },
};

const LineChart = ({
  name,
  level,
  width,
}: {
  name: string;
  level: string;
  width: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div id="chartLabel" className="flex justify-between text-neutral-500">
        <p>{name}</p>
        <p>{level}</p>
      </div>
      <div id="chartLine" className="flex h-1 w-full rounded-lg bg-neutral-700">
        <div
          id="filledChartLine"
          className={`${width} rounded-l-lg bg-teal-600`}
        ></div>
      </div>
    </div>
  );
};
const SkillsSection = () => {
  return (
    <Layout pageName="skills">
      <div className="flex h-full flex-col justify-between">
        <h1 className="text-center text-3xl text-neutral-400">My skills</h1>
        <div className="flex w-full gap-8">
          <div className="flex-0 grow-0 basis-[55%] flex-col justify-center">
            <Radar options={chartOptions} data={chartData} />
          </div>
          <div className="mt-12 flex grow flex-col gap-6 text-neutral-400">
            <h2 className="text-xl">Languages</h2>
            <LineChart name="Russian" level="C1" width="w-5/6" />
            <LineChart name="English" level="B2" width="w-4/6" />
            <LineChart name="French" level="B1" width="w-3/6" />
            <LineChart name="Spanish" level="A2" width="w-2/6" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SkillsSection;
