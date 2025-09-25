export default function GPUSpecificationsMobile() {
  const gpuData = [
    {
      model: "NVIDIA H100",
      memory: "80GB HBM3",
      cores: "18,432",
      price: "21 $NLOV"
    },
    {
      model: "NVIDIA GeForce RTX 4090",
      memory: "24GB GDDR6X",
      cores: "16,384",
      price: "5 $NLOV"
    },
    {
      model: "NVIDIA RTX 3090 Ti",
      memory: "24GB GDDR6X",
      cores: "10,752",
      price: "2 $NLOV"
    },
    {
      model: "NVIDIA A6000",
      memory: "48GB GDDR6",
      cores: "10,752",
      price: "6 $NLOV"
    },
    {
      model: "NVIDIA A5000",
      memory: "24GB GDDR6",
      cores: "8,192",
      price: "3 $NLOV"
    },
    {
      model: "NVIDIA A4000",
      memory: "16GB GDDR6",
      cores: "6,144",
      price: "2 $NLOV"
    }
  ];

  return (
    <div className="glass-card p-6 rounded-xl border border-#0361DA/10">
      <h3 className="text-xl font-bold mb-4 text-center">
        Available GPU Specifications
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-3 text-left text-sm font-medium">GPU Model</th>
              <th className="py-3 px-3 text-left text-sm font-medium">CUDA Cores</th>
              <th className="py-3 px-3 text-left text-sm font-medium">Price/Hr</th>
            </tr>
          </thead>
          <tbody>
            {gpuData.map((gpu, index) => (
              <tr 
                key={index} 
                className={index < gpuData.length - 1 ? "border-b" : ""}
              >
                <td className="py-3 px-3 text-sm font-medium">{gpu.model}</td>
                <td className="py-3 px-3 text-sm">{gpu.cores}</td>
                <td className="py-3 px-3 text-sm">{gpu.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
