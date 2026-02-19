import { useState } from "react";
import BeneficiaryTable from "@/components/BeneficiaryTable";
import AddBeneficiaryDialog from "@/components/AddBeneficiaryDialog";
import { beneficiaries as initialBeneficiaries, type Beneficiary } from "@/data/mockData";

const Beneficiaries = () => {
  const [data, setData] = useState<Beneficiary[]>(initialBeneficiaries);

  const handleAdd = (newB: Beneficiary) => {
    setData((prev) => [newB, ...prev]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Beneficiaries</h1>
          <p className="text-sm text-muted-foreground mt-1">Register, search, and manage all beneficiaries across programs.</p>
        </div>
        <AddBeneficiaryDialog onAdd={handleAdd} />
      </div>
      <BeneficiaryTable data={data} />
    </div>
  );
};

export default Beneficiaries;
