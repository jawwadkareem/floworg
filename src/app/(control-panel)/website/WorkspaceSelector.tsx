import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const WorkspaceSelector = () => {
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/workspace?email=anna@floworg.ai");
        if (!res.ok) throw new Error("Failed to fetch workspaces");

        const data = await res.json();
        setWorkspaces(data.workspaces || []);
      } catch (err: any) {
        console.log(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspaces();
  }, []);

  const handleNext = () => {
    if (!selected) return;
    navigate("/payment", { state: { workspace: selected } });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4 border">
      <h2 className="text-xl font-semibold">Select Your Workspace</h2>

      {loading && <div>Loading workspaces...</div>}
      {error && <div className="text-red-500">{error}</div>}

      {!loading && !error && (
        <>
          <select
            value={selected || ""}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="" disabled>Select a workspace</option>
            {workspaces.map((ws) => (
              <option key={ws.id} value={ws.name}>{ws.name}</option>
            ))}
          </select>

          <button
            onClick={handleNext}
            disabled={!selected}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
          >
            Next
          </button>
        </>
      )}

      {selected && <div className="text-green-600">Selected: {selected}</div>}
    </div>
  );
};

export default WorkspaceSelector;
