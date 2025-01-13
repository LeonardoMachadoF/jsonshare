import { JsonDataTable } from "@/components/json-data-table";
import { JsonEditor } from "@/components/json-editor";

export default function DashboardPage() {
    return (
        <div>
            <div className="my-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">gerencie seus dados e compartilhe com outros</p>
            </div>
            <JsonEditor />
        </div>
    )
}