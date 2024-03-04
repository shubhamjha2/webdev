import { useEffect, useState } from "react";
// costum hook provide a json data
function Usecurrencyinfo(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((pro) => pro.json())
      .then((pro) => setdata(pro[currency]))
      .catch((error) => {
        console.error("Failed to fetch with error:", error);
      });
  }, [currency]);
  return data;
}

export default Usecurrencyinfo;
