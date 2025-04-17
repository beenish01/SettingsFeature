
// // // import React from "react";
// // // import ReportLayout from "@/components/ReportLayout";
// // // import { FileText, Download } from "lucide-react";
// // // import { useReport } from "@/context/ReportContext";

// // // const GenerateReport: React.FC = () => {
// // //   const { uploadedImages, predictionResult } = useReport();

// // //   const handleDownloadPDF = () => {
// // //     // In a real implementation, you would generate and download a PDF here
// // //     alert("This would download a PDF report in a real implementation");
// // //   };

// // //   return (
// // //     <ReportLayout 
// // //       title="Generate Report" 
// // //       prevRoute="/review-damage"
// // //     >
// // //       <p className="text-gray-600 mb-6">
// // //         Generate the final AI report for the damaged vehicle.
// // //       </p>
      
// // //       <div className="border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center min-h-[250px]">
// // //         {uploadedImages.length > 0 && predictionResult ? (
// // //           <div className="w-full p-6">
// // //             <div className="flex justify-between mb-6">
// // //               <div>
// // //                 <h3 className="font-bold text-xl">Vehicle Damage Report</h3>
// // //                 <p className="text-gray-500">Generated on {new Date().toLocaleDateString()}</p>
// // //               </div>
// // //               <div className="flex items-center">
// // //                 <button 
// // //                   className="flex items-center text-orange-500"
// // //                   onClick={handleDownloadPDF}
// // //                 >
// // //                   <Download className="mr-1" size={16} />
// // //                   <span>Download PDF</span>
// // //                 </button>
// // //               </div>
// // //             </div>
            
// // //             <div className="grid grid-cols-2 gap-4 mb-6">
// // //               <div className="bg-gray-50 p-3 rounded-lg">
// // //                 <p className="font-medium">Vehicle Details</p>
// // //                 <p className="text-sm text-gray-600">Vehicle model information</p>
// // //               </div>
// // //               <div className="bg-gray-50 p-3 rounded-lg">
// // //                 <p className="font-medium">Damage Summary</p>
// // //                 <p className="text-sm text-gray-600">
// // //                   Estimated Repair Cost: PKR {predictionResult.predicted_cost_pkr.toLocaleString()}
// // //                 </p>
// // //               </div>
// // //             </div>
            
// // //             <div className="mb-6">
// // //               <h4 className="font-medium mb-2">Damage Details:</h4>
// // //               <div className="bg-gray-50 p-3 rounded-lg">
// // //                 <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
// // //                   {predictionResult.breakdown.map((item, index) => (
// // //                     <li key={index}>
// // //                       <span className="font-medium">{item.part}:</span> {item.severity} - 
// // //                       Base: {item.base}, Multiplier: {item.mult}, Labor: {item.labor} - 
// // //                       <span className="font-medium"> PKR {item.total.toLocaleString()}</span>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </div>
            
// // //             {(predictionResult.part_image_url || predictionResult.severity_image_url) && (
// // //               <div className="grid grid-cols-2 gap-4 mb-6">
// // //                 {predictionResult.part_image_url && (
// // //                   <div>
// // //                     <p className="font-medium mb-2">Damaged Parts Detection:</p>
// // //                     <img 
// // //                       src={predictionResult.part_image_url} 
// // //                       alt="Detected damaged parts"
// // //                       className="w-full h-auto rounded-lg"
// // //                     />
// // //                   </div>
// // //                 )}
                
// // //                 {predictionResult.severity_image_url && (
// // //                   <div>
// // //                     <p className="font-medium mb-2">Damage Severity Map:</p>
// // //                     <img 
// // //                       src={predictionResult.severity_image_url} 
// // //                       alt="Damage severity map"
// // //                       className="w-full h-auto rounded-lg"
// // //                     />
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             )}
            
// // //             <p className="text-xs text-gray-400 text-center mt-4">
// // //               This is an AI-generated assessment. Final repair decisions should be made by qualified professionals.
// // //             </p>
// // //           </div>
// // //         ) : (
// // //           <>
// // //             <FileText className="w-12 h-12 text-gray-400 mb-3" />
// // //             <p className="text-lg text-gray-500">Report preview</p>
// // //             <p className="text-sm text-gray-400 mt-2">
// // //               Upload vehicle images and review damage to generate report
// // //             </p>
// // //           </>
// // //         )}
// // //       </div>
      
// // //     </ReportLayout>
// // //   );
// // // };

// // // export default GenerateReport;



// // import React from "react";
// // import ReportLayout from "@/components/ReportLayout";
// // import { FileText, Download } from "lucide-react";
// // import { useReport } from "@/context/ReportContext";

// // const GenerateReport: React.FC = () => {
// //   const { uploadedImages, predictionResult } = useReport();

// //   const handleDownloadPDF = () => {
// //     alert("This would download a PDF report in a real implementation");
// //   };

// //   return (
// //     <ReportLayout title="Generate Report" prevRoute="/review-damage">
// //       <p className="text-gray-600 mb-6">
// //         Generate the final AI report for the damaged vehicle.
// //       </p>

// //       <div className="border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center min-h-[250px]">
// //         {uploadedImages.length > 0 && predictionResult ? (
// //           <div className="w-full p-6">
// //             <div className="flex justify-between mb-6">
// //               <div>
// //                 <h3 className="font-bold text-xl">Vehicle Damage Report</h3>
// //                 <p className="text-gray-500">
// //                   Generated on {new Date().toLocaleDateString()}
// //                 </p>
// //               </div>
// //               <div className="flex items-center">
// //                 <button
// //                   className="flex items-center text-orange-500"
// //                   onClick={handleDownloadPDF}
// //                 >
// //                   <Download className="mr-1" size={16} />
// //                   <span>Download PDF</span>
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-2 gap-4 mb-6">
// //               <div className="bg-gray-50 p-3 rounded-lg">
// //                 <p className="font-medium">Vehicle Details</p>
// //                 <p className="text-sm text-gray-600">
// //                   Model: {predictionResult.car_model}
// //                 </p>
// //               </div>
// //               <div className="bg-gray-50 p-3 rounded-lg">
// //                 <p className="font-medium">Damage Summary</p>
// //                 <p className="text-sm text-gray-600">
// //                   Estimated Repair Cost: PKR{" "}
// //                   {predictionResult.predicted_cost.toLocaleString()}
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="mb-6">
// //               <h4 className="font-medium mb-2">Damage Details:</h4>
// //               <div className="bg-gray-50 p-3 rounded-lg">
// //                 <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
// //                   {predictionResult.damages.map((item, index) => (
// //                     <li key={index}>
// //                       <span className="font-medium">{item.part}:</span>{" "}
// //                       {item.severity} – Base: {item.base}, Multiplier:{" "}
// //                       {item.mult}, Labor: {item.labor} –{" "}
// //                       <span className="font-medium">
// //                         PKR {item.total.toLocaleString()}
// //                       </span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>

// //             {(predictionResult.part_image_base64 ||
// //               predictionResult.severity_image_base64) && (
// //               <div className="grid grid-cols-2 gap-4 mb-6">
// //                 {predictionResult.part_image_base64 && (
// //                   <div>
// //                     <p className="font-medium mb-2">Damaged Parts Detection:</p>
// //                     <img
// //                       src={`data:image/jpeg;base64,${predictionResult.part_image_base64}`}
// //                       alt="Detected damaged parts"
// //                       className="w-full h-auto rounded-lg border"
// //                     />
// //                   </div>
// //                 )}

// //                 {predictionResult.severity_image_base64 && (
// //                   <div>
// //                     <p className="font-medium mb-2">Damage Severity Map:</p>
// //                     <img
// //                       src={`data:image/jpeg;base64,${predictionResult.severity_image_base64}`}
// //                       alt="Damage severity map"
// //                       className="w-full h-auto rounded-lg border"
// //                     />
// //                   </div>
// //                 )}
// //               </div>
// //             )}

// //             <p className="text-xs text-gray-400 text-center mt-4">
// //               This is an AI-generated assessment. Final repair decisions should
// //               be made by qualified professionals.
// //             </p>
// //           </div>
// //         ) : (
// //           <>
// //             <FileText className="w-12 h-12 text-gray-400 mb-3" />
// //             <p className="text-lg text-gray-500">Report preview</p>
// //             <p className="text-sm text-gray-400 mt-2">
// //               Upload vehicle images and review damage to generate report
// //             </p>
// //           </>
// //         )}
// //       </div>
// //     </ReportLayout>
// //   );
// // };

// // export default GenerateReport;



// import React from "react";
// import ReportLayout from "@/components/ReportLayout";
// import { FileText, Download } from "lucide-react";
// import { useReport } from "@/context/ReportContext";

// const GenerateReport: React.FC = () => {
//   const { uploadedImages, predictionResult } = useReport();

//   const handleDownloadPDF = () => {
//     alert("This would download a PDF report in a real implementation");
//   };

//   return (
//     <ReportLayout title="Generate Report" prevRoute="/review-damage">
//       <p className="text-gray-600 mb-6">
//         Generate the final AI report for the damaged vehicle.
//       </p>

//       <div className="border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center min-h-[250px]">
//         {uploadedImages.length > 0 && predictionResult ? (
//           <div className="w-full p-6">
//             <div className="flex justify-between mb-6">
//               <div>
//                 <h3 className="font-bold text-xl">Vehicle Damage Report</h3>
//                 <p className="text-gray-500">
//                   Generated on {new Date().toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   className="flex items-center text-orange-500"
//                   onClick={handleDownloadPDF}
//                 >
//                   <Download className="mr-1" size={16} />
//                   <span>Download PDF</span>
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <p className="font-medium">Vehicle Details</p>
//                 <p className="text-sm text-gray-600">
//                   Model: {predictionResult.car_model}
//                 </p>
//               </div>
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <p className="font-medium">Damage Summary</p>
//                 <p className="text-sm text-gray-600">
//                   Estimated Repair Cost: PKR{" "}
//                   {predictionResult.predicted_cost.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             <div className="mb-6">
//               <h4 className="font-medium mb-2">Damage Details:</h4>
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
//                   {predictionResult.damages.map((item, index) => (
//                     <li key={index}>
//                       <span className="font-medium">{item.part}:</span>{" "}
//                       {item.severity} – Base: {item.base}, Multiplier:{" "}
//                       {item.mult}, Labor: {item.labor} –{" "}
//                       <span className="font-medium">
//                         PKR {item.total.toLocaleString()}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {(predictionResult.part_image_base64 ||
//               predictionResult.severity_image_base64) && (
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 {predictionResult.part_image_base64 && (
//                   <div>
//                     <p className="font-medium mb-2">Damaged Parts Detection:</p>
//                     <img
//                       src={`data:image/jpeg;base64,${predictionResult.part_image_base64}`}
//                       alt="Detected damaged parts"
//                       className="w-full h-auto rounded-lg border"
//                     />
//                   </div>
//                 )}

//                 {predictionResult.severity_image_base64 && (
//                   <div>
//                     <p className="font-medium mb-2">Damage Severity Map:</p>
//                     <img
//                       src={`data:image/jpeg;base64,${predictionResult.severity_image_base64}`}
//                       alt="Damage severity map"
//                       className="w-full h-auto rounded-lg border"
//                     />
//                   </div>
//                 )}
//               </div>
//             )}

//             <p className="text-xs text-gray-400 text-center mt-4">
//               This is an AI-generated assessment. Final repair decisions should
//               be made by qualified professionals.
//             </p>
//           </div>
//         ) : (
//           <>
//             <FileText className="w-12 h-12 text-gray-400 mb-3" />
//             <p className="text-lg text-gray-500">Report preview</p>
//             <p className="text-sm text-gray-400 mt-2">
//               Upload vehicle images and review damage to generate report.
//             </p>
//           </>
//         )}
//       </div>
//     </ReportLayout>
//   );
// };

// export default GenerateReport;
import React, { useRef, useState } from "react";
import ReportLayout from "@/components/ReportLayout";
import { Download, Repeat } from "lucide-react";
import { useReport } from "@/context/ReportContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const GenerateReport: React.FC = () => {
  const { uploadedImages, predictionResult } = useReport();
  const reportRef = useRef<HTMLDivElement>(null);
  const [manualReview, setManualReview] = useState(false);

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;

    const canvas = await html2canvas(reportRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("vehicle-damage-report.pdf");
  };

  const handleReupload = () => {
    window.location.href = "/"; // or trigger an upload reset if you have a function
  };

  return (
    <ReportLayout title="Generate Report" prevRoute="/review-damage">
      <p className="text-gray-500 mb-6">
        Generate the final AI report for the damaged vehicle.
      </p>

      <div className="border border-gray-300 rounded-lg flex flex-col items-center justify-center p-6">
        {uploadedImages.length > 0 && predictionResult ? (
          <div className="w-full max-w-3xl" ref={reportRef}>
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="font-bold text-xl text-black">Vehicle Damage Report</h3>
                <p className="text-gray-500">
                  Generated on {new Date().toLocaleDateString()}
                </p>
              </div>
              <button onClick={handleDownloadPDF} className="flex items-center text-orange-500 hover:underline">
                <Download className="mr-1" size={16} />
                Download PDF
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Vehicle Details</p>
                <p className="text-gray-600">Model: <strong>{predictionResult.car_model}</strong></p>
                <p className="text-gray-600">Group: {predictionResult.car_group || "—"}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Damage Summary</p>
                <p className="text-gray-600">Estimated Repair Cost:</p>
                <p className="text-lg font-semibold text-orange-600">PKR {predictionResult.predicted_cost.toLocaleString()}</p>
              </div>
            </div>

            {/* 📄 Damage Details Table */}
            <div className="bg-white p-4 rounded-lg border">
              <p className="font-semibold mb-3">Damage Details:</p>
              <div className="grid grid-cols-3 text-sm font-medium text-gray-600 border-b pb-2 mb-2">
                <span>Damaged parts</span>
                <span>Severity</span>
                <span className="text-right">Cost</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                {predictionResult.damages.map((item, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-3 items-center border-b border-blue-200 pb-1"
                  >
                    <span className="underline">{item.part.replace(/_/g, "-")}</span>
                    <span className="capitalize">{item.severity}</span>
                    <span className="text-right font-medium underline text-black">
                      PKR {item.total.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-right font-semibold mt-4 text-black">
                Total estimated repair cost: PKR {predictionResult.predicted_cost.toLocaleString()}
              </p>
            </div>

            {/* 📸 Annotated Images */}
            {(predictionResult.part_image_base64 || predictionResult.severity_image_base64) && (
              <div className="grid grid-cols-2 gap-4 mt-6">
                {predictionResult.part_image_base64 && (
                  <div>
                    <p className="font-medium mb-2 text-black">Damaged Parts Detection:</p>
                    <img
                      src={`data:image/jpeg;base64,${predictionResult.part_image_base64}`}
                      alt="Detected damaged parts"
                      className="w-full h-auto rounded-lg border"
                    />
                  </div>
                )}
                {predictionResult.severity_image_base64 && (
                  <div>
                    <p className="font-medium mb-2 text-black">Damage Severity Map:</p>
                    <img
                      src={`data:image/jpeg;base64,${predictionResult.severity_image_base64}`}
                      alt="Damage severity map"
                      className="w-full h-auto rounded-lg border"
                    />
                  </div>
                )}
              </div>
            )}

            {/* 🧠 AI Notice */}
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4 rounded">
              <p className="text-sm">
                ⚠️ <strong>Note:</strong> This report is AI-generated and should be reviewed by a certified estimator.
              </p>
            </div>

            {/* 📝 Manual Review Checkbox */}
            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                id="manual-review"
                checked={manualReview}
                onChange={() => setManualReview(!manualReview)}
              />
              <label htmlFor="manual-review" className="text-sm text-gray-700">
                Mark for manual inspection / Send to Claims Manager
              </label>
            </div>

            {/* 🔁 Re-upload */}
            <div className="mt-6 text-center">
              <button
                onClick={handleReupload}
                className="inline-flex items-center text-sm text-blue-600 hover:underline"
              >
                <Repeat className="w-4 h-4 mr-1" />
                Re-upload image
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Upload images to view report.</p>
        )}
      </div>
    </ReportLayout>
  );
};

export default GenerateReport;
