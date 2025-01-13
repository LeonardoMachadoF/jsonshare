import { AddJsonModal } from "./add-json-modal"
import { JsonDataTable } from "./json-data-table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export const JsonEditor = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Salvar JSON Data</CardTitle>
                <CardDescription>View and share your saved JSON data.</CardDescription>
            </CardHeader>
            <CardContent>
                <JsonDataTable />
            </CardContent>
            <CardFooter>
                <AddJsonModal />
            </CardFooter>
        </Card>
    )
}