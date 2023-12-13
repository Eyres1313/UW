// REQUIRE IS USED MORE WITH COMMON js (CHECKED IN NOTES)
// add
// PRACTICE READING AND WRITE WITH FS

// Import required modules (included UUID for more time)
const uuid = require("uuid");
const fs = require("fs").promises;
const path = require("path");
const express = require("express");
const { json } = require("express");
const addInvoice = require("./invoice");
const getInvoices = require("./invoice");
// const getInvoiceById = require("./invoice");

const app = express();
const port = 3000;

// create a dummy invoice to test console in app.js
// const invoice = {
//   id: uuid.v4(),
//   type: "energy",
//   name: "electricity",
//   amount: 245
// };

// // define a function that writes an invoice
// // the object is passed to the invoice
// async function printInvoice(invoice) {
//   //  write the invoice to a JSON file
//   const JSONData = JSON.stringify(invoice);
//   await fs.writeFile("invoices.json", JSONData);
// }
//printInvoice(invoice);

// Send a request to the server to get all of the invoices (re worked with the new functions)

//Request handler to get all the invoices

app.get("/invoices", async function (req, res) {
  // call the function and store it in a variable
  const invoiceResponse = await getInvoices();
  res.json(invoiceResponse);
  return invoiceResponse;
});

// Request handler to add an invoice

app.post("/invoices", async function (req, res) {
  const queryData = req.invoice;
  console.log(queryData);
  //   const invoiceType = queryData.invoices.type;
  //   const invoiceName = queryData.invoicesname;
  //   const invoiceAmount = queryData.invoices.amount;
  //   const newInvoice = await addInvoice(invoiceType, invoiceName, invoiceAmount);

  //   const responseAddInvoice = {
  //     status: 201,
  //     data: newInvoice,
  //   };
  //   res.json(responseAddInvoice);
});

// Request handler to get invoice by ID - need to check with ROB
// app.get("invoices/:id", async function (req, res) {
//   // variable/request using the parameter id
//   const invoiceById = await getInvoiceById(req.params.id);
//   res.json(invoiceById);
// });

// Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// PRACTICE READING WITH FS

// async function readAndDisplayInvoice() {
//   const JSONData = await fs.readFile("invoices.json", "utf-8");
//   const invoice = JSON.parse(JSONData);
//   console.log(invoice);
// };
// readAndDisplayInvoice();

// WORK COMPLETED IN TECH TEST

// const filePath = path.resolve(process.cwd(), "invoices.json");

// // create a function that gets the ideas from the database
// async function getInvoice() {
// const invoice = fs.readFile(filePath, "utf-8");
// return json.PARSE(invoice);
// }

// app.get("/invoices", async function (_req, res) {
// call the function and store it in a variable
// const invoiceResponse = await getInvoice();
// res.json(invoiceResponse);
// });
