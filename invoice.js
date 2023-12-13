// Import required modules (included UUID for more time)
const uuid = require("uuid");
const fs = require("fs").promises;
const path = require("path");
const express = require("express");
const { json } = require("express");
const { get } = require("http");

// define filepath

const filePath = path.resolve(process.cwd(), "invoices.json");

// define a function that writes an invoice

async function addInvoice(type, name, amount) {
  const JSONData = await fs.readFile(filePath, "utf-8");
  const invoices = JSON.parse(JSONData);

  const newInvoice = {
    id: uuid.v4(),
    type,
    name,
    amount,
  };

  invoices.push(newInvoice);
  await fs.writeFile(filePath, JSON.stringify(invoices, null, 2), "utf-8");

  return newInvoice;
}

// Define a function to get all invoices
async function getInvoices() {
  const invoiceJSON = await fs.readFile(filePath, "utf-8");
  const invoices = JSON.parse(invoiceJSON);
  return invoices;
}

// Define a function to get an invoice by ID
async function getInvoiceById(id) {
  const JSONData = await fs.readFile(filePath, "utf-8");
  const invoices = JSON.parse(JSONData);

}

// new way to export functions
module.exports = { addInvoice, getInvoices, getInvoiceById };

// create a dummy invoice to test console in app.js
// const invoice = {
//   id: uuid.v4(),
//   type: "energy",
//   name: "electricity",
//   amount: 245,
// };

// // define a function that writes an invoice
// // the object is passed to the invoice
// async function printInvoice(invoice) {
//   //  write the invoice to a JSON file
//   const JSONData = JSON.stringify(invoice);
//   await fs.writeFile("invoices.json", JSONData);
// }
// printInvoice(invoice);
