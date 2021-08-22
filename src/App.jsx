import React from 'react';
import { getLaunches } from './api-client';
import { prepareData } from './lib/js-and-rockets';

import "./App.css";
import YearsBar from "./YearsBar";
import Sidebar from "./Sidebar";
import Launches from "./Launches";

function App() {
  const [data, setData] = React.useState([]);
  const [launches, setLaunches] = React.useState([]);
  const [years, setYears] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState('');
  const [selectedCustomer, setSelectedCustomer] = React.useState('');
  const [currentYearCustomers, setCurrentYearCustomers] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await getLaunches();
      const uniqueYears = [...new Set(response.map(item => item.launch_year))].reverse().slice(0, 5);

      setData(response);
      setYears(uniqueYears.reverse());
      setSelectedYear(uniqueYears[0]);
    }
    loadData();
  }, []);

  React.useEffect(() => {
    const byYear = data.filter(item => item.launch_year === selectedYear);
    const yearCustomers = [...new Set(byYear.map(mission => mission.rocket.second_stage.payloads).flat().map(payload => [...payload.customers]).flat())];
    setCurrentYearCustomers(yearCustomers.sort((a, b) => a.localeCompare(b)));
    setSelectedCustomer(yearCustomers[0]);
  }, [selectedYear]);

  React.useEffect(() => {
    const filteredData = prepareData(data, (payload) => {
      return payload.launch_year === selectedYear &&
      payload.rocket.second_stage.payloads.some(payload => (
        payload.customers.some(customer => customer.includes(selectedCustomer))
      ))
    });
    setLaunches(filteredData);
  }, [selectedYear, selectedCustomer]);

  return (
    <div className="App">
      <header>
        <YearsBar
          years={years}
          handleClick={(year) => setSelectedYear(year)}
        />
      </header>
      <main>
        <Sidebar
          customers={currentYearCustomers}
          handleClick={(customer) => setSelectedCustomer(customer)}
        />
        <Launches data={launches} />
      </main>
    </div>
  );
}

export default App;
