// Constant data that can be imported from env
const API_URI = 'https://api.spacexdata.com/v3/launches/past';
const LAUNCH_YEAR = '2018';
const CUSTOMER_NAME = 'NASA';

const loadData = () => {
  return fetch(API_URI);
}

const isNASAMission = (data) => (
  data.launch_year === LAUNCH_YEAR &&
  data.rocket.second_stage.payloads.some(payload => (
    payload.customers.some(customer => customer.includes(CUSTOMER_NAME))
  ))
);

/**
 * Returns mission list for {CUSTOMER_NAME} that were launched in {LAUNCH_YEAR}
 * sorted in inverse chronological order and by payload count
 * @param {Array<{}>} payloads
 * @returns {Array<{
 *  "mission_name": string;
 *  "flight_number": number;
 *  "payloads_count": number;
 * }>}
 */
export const prepareData = (payloads, filterFunction) => (
  payloads
    .sort((a, b) => (
      b.rocket.second_stage.payloads.length - a.rocket.second_stage.payloads.length || b.launch_date_unix - a.launch_date_unix
    ))
    .reduce((preparedData, payload) => (
      filterFunction(payload)
        ? [
          ...preparedData,
          {
            ...payload
          }
        ] : preparedData
    ), [])
);

/**
 * Renders output Array as a JSON string
 * @param {Array<{
 *  "mission_name": string;
 *  "flight_number": number;
 *  "payloads_count": number;
 * }>} output
 * @returns {string}
 */
const renderData = (output) => {
  const container = document.getElementById("out");
  container.innerHTML = JSON.stringify(output, null, 2);
}
