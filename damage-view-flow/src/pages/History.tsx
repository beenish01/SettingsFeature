import { useEffect, useState } from "react";

interface HistoryItem {
  id: string;
  car_model: string;
  predicted_cost: number;
  manual_cost: number;
  timestamp: string;
  part_image_base64: string;
  severity_image_base64: string;
}

export default function History() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    fetch("https://63c0-34-125-21-163.ngrok-free.app/history")
      .then(res => res.json())
      .then(data => setHistory(data))
      .catch(err => console.error("Error loading history:", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">📜 Damage Report History</h1>

      {history.length === 0 && (
        <p className="text-gray-500">No history found.</p>
      )}

      <div className="space-y-8">
        {history.map((item) => (
          <div key={item.id} className="border p-6 rounded-lg shadow">
            <div className="mb-2 text-sm text-gray-500">
              <b>{item.car_model}</b> | {new Date(item.timestamp).toLocaleString()}
            </div>
            <div className="mb-4 text-md font-semibold">
              Predicted: <span className="text-green-600">PKR {item.predicted_cost.toLocaleString()}</span> | 
              Manual: <span className="text-orange-600">PKR {item.manual_cost.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm mb-1">Damaged Parts</div>
                <img
                  src={`data:image/jpeg;base64,${item.part_image_base64}`}
                  className="rounded-lg w-full border"
                  alt="Detected Parts"
                />
              </div>
              <div>
                <div className="text-sm mb-1">Severity Map</div>
                <img
                  src={`data:image/jpeg;base64,${item.severity_image_base64}`}
                  className="rounded-lg w-full border"
                  alt="Damage Severity"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
