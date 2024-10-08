import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faShapes } from "@fortawesome/free-solid-svg-icons";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Content() {
  const [prefName, setPrefName] = useState("");
  const [graphYear, setGraphyear] = useState(0);
  const [graphType, setGraphType] = useState("");
  const [prefValue, setPrefValue] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [countryValue, setCountryValue] = useState(0);
  let totalVal = 0;
  interface PrefArea {
    [key: string]: { area: number; prefCode: number };
  }

  const prefArea: PrefArea = {
    北海道: { area: 834245000000, prefCode: 1 },
    青森県: { area: 9646000000, prefCode: 2 },
    岩手県: { area: 15275000000, prefCode: 3 },
    宮城県: { area: 7282000000, prefCode: 4 },
    秋田県: { area: 11638000000, prefCode: 5 },
    山形県: { area: 9323000000, prefCode: 6 },
    福島県: { area: 13784000000, prefCode: 7 },
    茨城県: { area: 6096000000, prefCode: 8 },
    栃木県: { area: 6408000000, prefCode: 9 },
    群馬県: { area: 6362000000, prefCode: 10 },
    埼玉県: { area: 3798000000, prefCode: 11 },
    千葉県: { area: 5157000000, prefCode: 12 },
    東京都: { area: 2194000000, prefCode: 13 },
    神奈川県: { area: 2416000000, prefCode: 14 },
    新潟県: { area: 12584000000, prefCode: 15 },
    富山県: { area: 4247000000, prefCode: 16 },
    石川県: { area: 4186000000, prefCode: 17 },
    福井県: { area: 4190000000, prefCode: 18 },
    山梨県: { area: 4465000000, prefCode: 19 },
    長野県: { area: 13562000000, prefCode: 20 },
    岐阜県: { area: 10621000000, prefCode: 21 },
    静岡県: { area: 7777000000, prefCode: 22 },
    愛知県: { area: 5172000000, prefCode: 23 },
    三重県: { area: 5774000000, prefCode: 24 },
    滋賀県: { area: 4017000000, prefCode: 25 },
    京都府: { area: 4612000000, prefCode: 26 },
    大阪府: { area: 1905000000, prefCode: 27 },
    兵庫県: { area: 8400000000, prefCode: 28 },
    奈良県: { area: 3691000000, prefCode: 29 },
    和歌山県: { area: 4726000000, prefCode: 30 },
    鳥取県: { area: 3507000000, prefCode: 31 },
    島根県: { area: 6708000000, prefCode: 32 },
    岡山県: { area: 7114000000, prefCode: 33 },
    広島県: { area: 8479000000, prefCode: 34 },
    山口県: { area: 6112000000, prefCode: 35 },
    徳島県: { area: 4147000000, prefCode: 36 },
    香川県: { area: 1876000000, prefCode: 37 },
    愛媛県: { area: 5676000000, prefCode: 38 },
    高知県: { area: 7103000000, prefCode: 39 },
    福岡県: { area: 4986000000, prefCode: 40 },
    佐賀県: { area: 2441000000, prefCode: 41 },
    長崎県: { area: 4131000000, prefCode: 42 },
    熊本県: { area: 7409000000, prefCode: 43 },
    大分県: { area: 6341000000, prefCode: 44 },
    宮崎県: { area: 7735000000, prefCode: 45 },
    鹿児島県: { area: 9186000000, prefCode: 46 },
    沖縄県: { area: 2281000000, prefCode: 47 },
  };

  const data = {
    labels: [prefName, countryName],
    datasets: [
      {
        label: prefName,
        data: [prefValue, countryValue],
        backgroundColor: ["rgb(0, 153, 132)", "rgb(112, 109, 101)"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const graphInfo = { pref: prefName, year: graphYear, type: graphType };

  function Download(prefCode: number, year: number, type: number) {
    const typeArr = [
      "土地 (住宅地)",
      "土地 (商業地)",
      "中古マンション等",
      "農地",
      "林地",
    ];

    setCountry(year, type);
    setPref(prefCode, year, type);
    setGraphyear(year);
    setGraphType(typeArr[type - 1]);
  }
  async function setPref(prefCode: number, year: number, type: number) {
    const apiKey = import.meta.env.VITE_RESAS_API_KEY;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");
    myHeaders.append("X-API-KEY", apiKey);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?year=${year}&prefCode=${prefCode}&cityCode=-&displayType=${type}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      assignPrefData(data["result"]); // Your JSON data is here
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
  interface PrefData {
    prefName: string;
    years: { value: number }[];
  }

  const assignPrefData = (data: PrefData) => {
    const resasPrefName = data.prefName;
    const resasPrefValue = data.years[0].value;

    setPrefName(resasPrefName);
    setPrefValue(resasPrefValue);
  };

  function setCountry(year: number, type: number) {
    totalVal = 0;

    const promises = Object.values(prefArea).map((pref) =>
      getPrefVal(pref.prefCode, year, type)
    );

    Promise.all(promises)
      .then(setFinal)
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  async function getPrefVal(prefCode: number, year: number, type: number) {
    const apiKey = import.meta.env.VITE_RESAS_API_KEY;
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json;charset=UTF-8");
    myHeaders.append("X-API-KEY", apiKey);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?year=${year}&prefCode=${prefCode}&cityCode=-&displayType=${type}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      addToTotal(data["result"].years[0].value); // Your JSON data is here
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  const addToTotal = (val: number) => {
    totalVal += val;
    // console.log(totalVal);
  };

  const setFinal = () => {
    setCountryName("全国平均");
    setCountryValue(totalVal / 47);
    console.log(graphInfo);
  };

  const [formData, setFormData] = useState({
    pref: 0,
    year: 0,
    type: 0,
  });

  const handlePrefChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      pref: parseInt(e.target.value, 10), // or +e.target.value
    }));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      year: parseInt(e.target.value, 10), // or +e.target.value
    }));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      type: parseInt(e.target.value, 10), // or +e.target.value
    }));
  };
  // Step 3: Handle button click
  const handleClick = () => {
    console.log("Form Data:", formData.type);
    Download(formData.pref, formData.year, formData.type);
    // Do something with the formData
  };

  return (
    <div className="m-[40px] w-auto h-[780px] flex gap-[80px]">
      <div className="w-[1457px] h-auto flex flex-col items-center justify-center">
        <div className="flex text-2xl font-normal text-white mb-9">
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="ml-3">{prefName}</span>
          </div>
          <div className="ml-11">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <span className="ml-3">
              {graphYear == 0 ? null : `${graphYear}年`}
            </span>
          </div>
          <div className="ml-11">
            <FontAwesomeIcon icon={faShapes} />
            <span className="ml-3">{graphType}</span>
          </div>
        </div>
        <div className="h-[446px] w-[713px]">
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="w-[359px] h-auto bg-primary rounded">
        <form>
          <div className="p-[24px] flex flex-col">
            <div className="h-[48px] text-base font-normal border-b border-primary">
              表示内容を選択
            </div>
            <div className="h-[88px] text-sm border-b border-primary flex justify-between items-center">
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <label className="ml-[6px]">場所</label>
              </div>
              <select
                className="h-[40px] w-[240px] flex"
                name="prefecture"
                value={formData.pref}
                onChange={handlePrefChange}
              >
                <option value="">--Select Pref--</option>
                {Object.entries(prefArea).map(([key, value]) => (
                  <option key={key} value={value.prefCode}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
            <div className="h-[88px] text-sm border-b border-primary flex justify-between items-center">
              <div>
                <FontAwesomeIcon icon={faCalendarCheck} />
                <label className="ml-[6px]">年度</label>
              </div>
              <select
                className="h-[40px] w-[240px] flex"
                name="prefecture"
                value={formData.year}
                onChange={handleYearChange}
              >
                <option value="">--Select Year--</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
              </select>
            </div>
            <div className="h-[192px] text-sm flex pt-6">
              <div>
                <FontAwesomeIcon icon={faShapes} />
                <label className="ml-[6px]">種類:</label>
              </div>
              <div className="ml-[24px] flex flex-col gap-3">
                <div>
                  <input
                    className="form-radio scale-150 text-blue-600 hover:border-blue-500 mr-2"
                    type="radio"
                    name="type"
                    value={1}
                    checked={formData.type === 1}
                    onChange={handleTypeChange}
                  />
                  <label>土地 (住宅地)</label>
                </div>
                <div>
                  <input
                    className="form-radio scale-150 text-blue-600 hover:border-blue-500 mr-2"
                    type="radio"
                    name="type"
                    value={2}
                    checked={formData.type === 2}
                    onChange={handleTypeChange}
                  />
                  <label>土地 (商業地)</label>
                </div>
                <div>
                  <input
                    className="form-radio scale-150 text-blue-600 hover:border-blue-500 mr-2"
                    type="radio"
                    name="type"
                    value={3}
                    checked={formData.type === 3}
                    onChange={handleTypeChange}
                  />
                  <label>中古マンション等</label>
                </div>
                <div>
                  <input
                    className="form-radio scale-150 text-blue-600 hover:border-blue-500 mr-2"
                    type="radio"
                    name="type"
                    value={4}
                    checked={formData.type === 4}
                    onChange={handleTypeChange}
                  />
                  <label>農地</label>
                </div>
                <div>
                  <input
                    className="form-radio scale-150 text-blue-600 hover:border-blue-500 mr-2"
                    type="radio"
                    name="type"
                    value={5}
                    checked={formData.type === 5}
                    onChange={handleTypeChange}
                  />
                  <label>林地</label>
                </div>
              </div>
            </div>
            <div className="h-[316px] flex flex-col justify-end">
              <button
                className="bg-button hover:bg-blue-800 text-white w-[311px] h-[52px] rounded-sm"
                type="button"
                onClick={() => handleClick()}
              >
                データをダウンロード
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Content;
