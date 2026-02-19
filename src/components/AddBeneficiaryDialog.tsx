import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const programs = [
  "Education Empowerment", "Health & Nutrition", "Livelihood Support",
  "Women's Empowerment", "Youth Skills Training", "Clean Water Initiative",
];

const locations = [
  "Accra, Ghana", "Nairobi, Kenya", "Mumbai, India", "Lima, Peru",
  "Dhaka, Bangladesh", "Manila, Philippines",
];

const AddBeneficiaryDialog = ({ onAdd }: { onAdd: (b: any) => void }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "", age: "", gender: "" as string, location: "", program: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.gender || !form.location || !form.program) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    const age = parseInt(form.age);
    if (isNaN(age) || age < 1 || age > 120) {
      toast({ title: "Invalid age", description: "Age must be between 1 and 120.", variant: "destructive" });
      return;
    }

    const newBeneficiary = {
      id: `BEN-${String(Date.now()).slice(-4)}`,
      name: form.name.trim().slice(0, 100),
      age,
      gender: form.gender as "Male" | "Female" | "Other",
      location: form.location,
      program: form.program,
      enrollmentDate: new Date().toISOString().split("T")[0],
      impactScore: 0,
      status: "Active" as const,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(form.name.trim())}&backgroundColor=2a9d8f&textColor=ffffff`,
      beforeMetrics: { income: 150, healthScore: 45, educationLevel: 35, wellbeing: 40 },
      afterMetrics: { income: 150, healthScore: 45, educationLevel: 35, wellbeing: 40 },
      serviceHistory: [],
      financialAid: 0,
      attendance: 0,
    };

    onAdd(newBeneficiary);
    setForm({ name: "", age: "", gender: "", location: "", program: "" });
    setOpen(false);
    toast({ title: "Beneficiary added", description: `${newBeneficiary.name} has been registered successfully.` });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gradient-primary border-0 text-primary-foreground gap-2">
          <UserPlus className="h-4 w-4" />
          Add Beneficiary
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Register New Beneficiary</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" placeholder="Enter full name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="age">Age *</Label>
              <Input id="age" type="number" min={1} max={120} placeholder="Age" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Gender *</Label>
              <Select value={form.gender} onValueChange={(v) => setForm({ ...form, gender: v })}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Location *</Label>
            <Select value={form.location} onValueChange={(v) => setForm({ ...form, location: v })}>
              <SelectTrigger><SelectValue placeholder="Select location" /></SelectTrigger>
              <SelectContent>
                {locations.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Program *</Label>
            <Select value={form.program} onValueChange={(v) => setForm({ ...form, program: v })}>
              <SelectTrigger><SelectValue placeholder="Select program" /></SelectTrigger>
              <SelectContent>
                {programs.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" className="gradient-primary border-0 text-primary-foreground">Register</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBeneficiaryDialog;
