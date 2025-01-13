"use client"
import { useState } from "react"
import { AddJsonModal } from "./add-json-modal"
import { JsonDataTable } from "./json-data-table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export const JsonEditor = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleSave = async (name: string, content: string) => {
        const response = await fetch('/api/json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, content })
        });

        if (response.ok) {
            setRefreshKey(state => state + 1);
            console.log('JSON adicionado com sucesso')
        } else {
            console.log('Ocorreu algum erro')
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Salvar JSON Data</CardTitle>
                <CardDescription>View and share your saved JSON data.</CardDescription>
            </CardHeader>
            <CardContent>
                <JsonDataTable key={refreshKey} />
            </CardContent>
            <CardFooter>
                <AddJsonModal onSave={handleSave} />
            </CardFooter>
        </Card>
    )
}