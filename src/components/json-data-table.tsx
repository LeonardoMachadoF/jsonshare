import { format } from "date-fns"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { ptBR } from "date-fns/locale"
import { AddJsonModal } from "./add-json-modal"
import { JsonEditor } from "./json-editor"

export const JsonDataTable = () => {
    const jsonDataList = [{
        id: "dasiyudhaiosudhas23",
        name: "complexo",
        createdAt: '2024-09-23T07:01:58.297Z'
    }]
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Criado em</TableHead>
                    <TableHead>
                        <span className="sr-only">Compartilhar</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {jsonDataList.map((data) => (
                    <TableRow key={data.id}>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{format(new Date(data.createdAt), 'dd/MM/yyyy', { locale: ptBR })}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}