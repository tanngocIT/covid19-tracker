import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";
import Map from "./Map";
import "leaflet/dist/leaflet.css";

export const CasesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

export const CaseType = {
  New: {
    title: "Cases",
    value: "cases",
    color: CasesTypeColors.cases,
  },
  Recovered: {
    title: "Recovered",
    value: "recovered",
    color: CasesTypeColors.recovered,
  },
  Death: { title: "Deaths", value: "deaths", color: CasesTypeColors.deaths },
};

export const Worldwide = { name: "Worldwide", code: "worldwide" };

const App = () => {
  const centerValue = { lat: 34.80746, lng: -40.4796 };
  const [country, setInputCountry] = useState(Worldwide);
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState(CaseType.New);
  const [mapCenter, setMapCenter] = useState(centerValue);
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e, value) => {
    const countryCode = value && value.value ? value.value : Worldwide;
    const url =
      countryCode === Worldwide
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        if (countryCode === Worldwide) {
          setMapCenter(centerValue);
          setMapZoom(3);
          setInputCountry(Worldwide);
        } else if (data.countryInfo) {
          setInputCountry({ name: data.country, code: countryCode });
          setMapCenter({
            lat: data.countryInfo.lat,
            lng: data.countryInfo.long,
          });
          setMapZoom(4);
        }
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Tracker</h1>
          <FormControl className="app__dropdown">
            {/* <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide"  classes="app__dropdown__item">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select> */}
            <Autocomplete
              id="sellect__country"
              options={countries}
              classes="app__dropdown__item"
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              onChange={onCountryChange}
              renderInput={(params) => (
                <TextField {...params} label="Worldwide" variant="outlined" />
              )}
            />
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox
            onClick={(e) => setCasesType(CaseType.New)}
            caseType={CaseType.New}
            isRed
            active={casesType === CaseType.New}
            //cases={prettyPrintStat(countryInfo.todayCases)}
            //total={numeral(countryInfo.cases).format("0.0a")}
            cases={numeral(countryInfo.todayCases).format("0,0")}
            total={numeral(countryInfo.cases).format("0,0")}
          />
          <InfoBox
            onClick={(e) => setCasesType(CaseType.Recovered)}
            caseType={CaseType.Recovered}
            active={casesType === CaseType.Recovered}
            // cases={prettyPrintStat(countryInfo.todayRecovered)}
            // total={numeral(countryInfo.recovered).format("0.0a")}
            cases={numeral(countryInfo.todayRecovered).format("0,0")}
            total={numeral(countryInfo.recovered).format("0,0")}
          />
          <InfoBox
            onClick={(e) => setCasesType(CaseType.Death)}
            caseType={CaseType.Death}
            isRed
            active={casesType === CaseType.Death}
            // cases={prettyPrintStat(countryInfo.todayDeaths)}
            // total={numeral(countryInfo.deaths).format("0.0a")}
            cases={numeral(countryInfo.todayDeaths).format("0,0")}
            total={numeral(countryInfo.deaths).format("0,0")}
          />
        </div>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="app__right">
        <CardContent>
          <div className="app__information">
            <h3>Live Cases by Country</h3>
            <Table countries={tableData} />
            <h3>
              {country.name} new {casesType.value}
            </h3>
            <LineGraph casesType={casesType} countryCode={country.code} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
