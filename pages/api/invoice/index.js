const PDFDocument = require("pdfkit");

function generateHeader(doc, invoice) {
  doc
    .image(
      "/Users/florian/Documents/Development/sampleOPA/pages/api/invoice/WUBS.png",
      50,
      45,
      { width: 50 }
    )
    .fillColor("#444444")
    .fontSize(10)
    .text(invoice.invoicer.name, 200, 50, { align: "right" })
    .text(invoice.invoicer.address, 200, 65, { align: "right" })
    .text(
      `${invoice.invoicer.zip} ${invoice.invoicer.city}, ${invoice.invoicer.country}`,
      200,
      80,
      { align: "right" }
    )
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc.fillColor("#444444").fontSize(20).text("Rechnung", 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("Rechnungsnummer:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.invoice_nr, 150, customerInformationTop)
    .font("Helvetica")
    .text("Rechnungsdatum:", 50, customerInformationTop + 15)
    .text(formatDate(new Date()), 150, customerInformationTop + 15)
    .text("Fälligkeitsdatum:", 50, customerInformationTop + 30)
    .text(formatDate(new Date()), 150, customerInformationTop + 30)

    .font("Helvetica-Bold")
    .text(invoice.recipient.name, 300, customerInformationTop)
    .font("Helvetica")
    .text(invoice.recipient.address, 300, customerInformationTop + 15)
    .text(
      `${invoice.recipient.zip} ${invoice.recipient.city}, ${invoice.recipient.country}`,
      300,
      customerInformationTop + 30
    )
    .moveDown();

  generateHr(doc, 252);
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 330;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Artikel",
    "Beschreibung",
    "Stückpreis",
    "Anzahl",
    "Preis"
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.item,
      item.description,
      formatCurrency(item.amount / item.quantity),
      item.quantity,
      formatCurrency(item.amount)
    );

    generateHr(doc, position + 20);
  }

  const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  generateTableRow(
    doc,
    subtotalPosition,
    "",
    "",
    "Zwischensumme",
    "",
    formatCurrency(invoice.subtotal)
  );

  const paidToDatePosition = subtotalPosition + 20;
  generateTableRow(
    doc,
    paidToDatePosition,
    "",
    "",
    "zzgl. Steuern",
    "",
    formatCurrency(invoice.subtotal * 1.2 - invoice.subtotal) // 20% Steuersatz
  );

  const duePosition = paidToDatePosition + 25;
  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    duePosition,
    "",
    "",
    "Bruttosumme",
    "",
    formatCurrency(invoice.subtotal - invoice.paid)
  );
  doc.font("Helvetica");
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text("Diese Rechnung wurde mit www.wubs.at erstellt.", 50, 780, {
      align: "center",
      width: 500,
    });
}

function generateTableRow(
  doc,
  y,
  item,
  description,
  unitCost,
  quantity,
  lineTotal
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(description, 150, y)
    .text(unitCost, 280, y, { width: 90, align: "right" })
    .text(quantity, 370, y, { width: 90, align: "right" })
    .text(lineTotal, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(562.5, y)
    .stroke();
}

function formatCurrency(cents) {
  return "€ " + (cents / 100).toFixed(2);
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return day + "." + month + "." + year;
}

export default (req, res) => {
  const invoice = {
    invoicer: { ...req.body.invoicer },
    recipient: { ...req.body.recipient },
    items: [
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
    ],
    subtotal: 8000,
    paid: 0,
    invoice_nr: 1234,
  };

  let doc = new PDFDocument({ margin: 50 });
  generateHeader(doc, invoice);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);

  doc.end();
  doc.pipe(res);
};
