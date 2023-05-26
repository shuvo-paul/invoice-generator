import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

export const downloadPdf = () => {
	const invoiceEl = document.getElementById('invoice-wrapper') as HTMLElement;
	html2canvas(invoiceEl, {

	}).then((canvas) => {
		const imgData = canvas.toDataURL('image/png', 1.0);
		const pdf = new jspdf('p', 'pt', 'a4');
		pdf.internal.scaleFactor = 1;
		const imgProps = pdf.getImageProperties(imgData);
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
		pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
		pdf.save('invoice.pdf');
	});
}
