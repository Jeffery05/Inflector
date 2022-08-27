// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
let value = "8";

// URL of the page we want to scrape
const url = "https://www.statcan.gc.ca/en/subjects-start/prices_and_price_indexes/consumer_price_indexes";

// Async function which scrapes the data
async function scrapeData() {
  try {

    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    const listItems = $(".indicator-growth-num-sm");
    
    const output = listItems.children("strong").text();
    value = output.substring(0, 3);
    console.log(value);

  } catch (err) {
    console.error(err);
  }  
}

function getVal() {
    return Number(value);
}
// Invoke the above function
scrapeData();
