import { JsonEditor } from '@/components/json-editor';
import prisma from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    const user = await currentUser();

    if (!user) {
        return redirect('/');
    }

    const loggedInUser = await prisma.user.findUnique({
        where: { clerkUserId: user.id }
    });

    if (!loggedInUser) {
        await prisma.user.create({
            data: {
                name: `${user.firstName} ${user.lastName}`,
                clerkUserId: user.id,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress
            }
        });
    }

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