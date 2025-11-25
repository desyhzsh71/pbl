import PDFDocument from "pdfkit";

interface InvoiceData {
  invoiceNumber: string;
  issueDate: Date;
  dueDate: Date;
  status: string;
  customer: {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string | null;
      country: string;
    } | null;
    company?: string | null;
  };
  items: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }>;
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string | null;
  notes?: string;
}

export async function generateInvoicePDF(data: InvoiceData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      // create pdf
      const doc = new PDFDocument({ 
        size: "A4", 
        margin: 50,
        info: {
          Title: `Invoice ${data.invoiceNumber}`,
          Author: "CMLABS CMS",
        }
      });

      // Collect PDF data into buffer
      const buffers: Buffer[] = [];
      doc.on("data", buffers.push.bind(buffers));
      doc.on("end", () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });

      // --- HEADER SECTION ---
      // Company logo and info (left side)
      doc
        .fontSize(20)
        .font("Helvetica-Bold")
        .text("CMLABS CMS", 50, 50);

      doc
        .fontSize(10)
        .font("Helvetica")
        .text("Jl. Mayjend Sungkono No.123", 50, 80)
        .text("Malang, East Java 65145", 50, 95)
        .text("Indonesia", 50, 110)
        .text("Email: billing@cmlabs.com", 50, 125)
        .text("Phone: +62 812-3456-7890", 50, 140);

      // Invoice title (right side)
      doc
        .fontSize(24)
        .font("Helvetica-Bold")
        .text("INVOICE", 400, 50, { align: "right" });

      // Status badge
      const statusColor = data.status === "PAID" ? "#10b981" : "#f59e0b";
      doc
        .fontSize(12)
        .fillColor(statusColor)
        .text(data.status.toUpperCase(), 400, 80, { align: "right" })
        .fillColor("#000000");

      // --- INVOICE INFO SECTION ---
      const invoiceInfoTop = 180;

      doc
        .fontSize(10)
        .font("Helvetica-Bold")
        .text("Invoice Number:", 50, invoiceInfoTop)
        .font("Helvetica")
        .text(data.invoiceNumber, 150, invoiceInfoTop);

      doc
        .font("Helvetica-Bold")
        .text("Issue Date:", 50, invoiceInfoTop + 15)
        .font("Helvetica")
        .text(formatDate(data.issueDate), 150, invoiceInfoTop + 15);

      doc
        .font("Helvetica-Bold")
        .text("Due Date:", 50, invoiceInfoTop + 30)
        .font("Helvetica")
        .text(formatDate(data.dueDate), 150, invoiceInfoTop + 30);

      if (data.paymentMethod) {
        doc
          .font("Helvetica-Bold")
          .text("Payment Method:", 50, invoiceInfoTop + 45)
          .font("Helvetica")
          .text(data.paymentMethod, 150, invoiceInfoTop + 45);
      }

      // --- CUSTOMER INFO SECTION ---
      const customerInfoTop = invoiceInfoTop;

      doc
        .fontSize(12)
        .font("Helvetica-Bold")
        .text("Bill To:", 350, customerInfoTop);

      doc
        .fontSize(10)
        .font("Helvetica")
        .text(data.customer.name, 350, customerInfoTop + 20);

      if (data.customer.company) {
        doc.text(data.customer.company, 350, customerInfoTop + 35);
      }

      doc.text(data.customer.email, 350, customerInfoTop + (data.customer.company ? 50 : 35));

      if (data.customer.address) {
        const addressTop = customerInfoTop + (data.customer.company ? 65 : 50);
        doc
          .text(data.customer.address.street, 350, addressTop)
          .text(
            `${data.customer.address.city}, ${data.customer.address.state} ${data.customer.address.zipCode || ""}`,
            350,
            addressTop + 15
          )
          .text(data.customer.address.country, 350, addressTop + 30);
      }

      // --- ITEMS TABLE ---
      const tableTop = 320;

      // Table header
      doc
        .fontSize(10)
        .font("Helvetica-Bold")
        .fillColor("#f3f4f6")
        .rect(50, tableTop, 495, 25)
        .fill()
        .fillColor("#000000");

      doc
        .text("Description", 60, tableTop + 8)
        .text("Qty", 300, tableTop + 8, { width: 50, align: "center" })
        .text("Unit Price", 360, tableTop + 8, { width: 80, align: "right" })
        .text("Total", 450, tableTop + 8, { width: 85, align: "right" });

      // Table items
      let itemY = tableTop + 35;
      doc.font("Helvetica");

      data.items.forEach((item, index) => {
        doc
          .text(item.description, 60, itemY)
          .text(item.quantity.toString(), 300, itemY, { width: 50, align: "center" })
          .text(`$${item.unitPrice.toFixed(2)}`, 360, itemY, { width: 80, align: "right" })
          .text(`$${item.total.toFixed(2)}`, 450, itemY, { width: 85, align: "right" });

        itemY += 25;

        // Add separator line
        if (index < data.items.length - 1) {
          doc
            .strokeColor("#e5e7eb")
            .lineWidth(0.5)
            .moveTo(50, itemY - 5)
            .lineTo(545, itemY - 5)
            .stroke()
            .strokeColor("#000000");
        }
      });

      // --- TOTALS SECTION ---
      const totalsTop = itemY + 20;

      // Subtotal
      doc
        .font("Helvetica")
        .text("Subtotal:", 400, totalsTop, { width: 80, align: "right" })
        .text(`$${data.subtotal.toFixed(2)}`, 480, totalsTop, { width: 65, align: "right" });

      // Tax (if applicable)
      if (data.tax > 0) {
        doc
          .text("Tax:", 400, totalsTop + 20, { width: 80, align: "right" })
          .text(`$${data.tax.toFixed(2)}`, 480, totalsTop + 20, { width: 65, align: "right" });
      }

      // Total (bold and larger)
      const totalTop = data.tax > 0 ? totalsTop + 40 : totalsTop + 20;
      doc
        .fontSize(12)
        .font("Helvetica-Bold")
        .text("Total:", 400, totalTop, { width: 80, align: "right" })
        .text(`$${data.total.toFixed(2)}`, 480, totalTop, { width: 65, align: "right" });

      // Line above total
      doc
        .strokeColor("#000000")
        .lineWidth(1)
        .moveTo(400, totalTop - 5)
        .lineTo(545, totalTop - 5)
        .stroke();

      // --- FOOTER SECTION ---
      const footerTop = 700;

      if (data.notes) {
        doc
          .fontSize(10)
          .font("Helvetica-Oblique")
          .text(data.notes, 50, footerTop, {
            width: 495,
            align: "center",
          });
      }

      doc
        .fontSize(8)
        .font("Helvetica")
        .fillColor("#6b7280")
        .text(
          "This is a computer-generated invoice. No signature required.",
          50,
          footerTop + 30,
          { width: 495, align: "center" }
        );

      // Finalize PDF
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Helper function to format date
 */
function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}