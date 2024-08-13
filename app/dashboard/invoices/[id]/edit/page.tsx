import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import {fetchCustomers, fetchInvoiceById} from "@/app/lib/data";
import Form from "@/app/ui/invoices/create-form";

export default async function Page ({ params }: { params : {id: string} }) {
    const id = params.id;
    const [invoice, customers ] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);
    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                { label: 'invoices', href:'/dashboard/invoices' },
                {
                    label: 'invoices',
                    href:`/dashboard/invoices/${id}/edit`,
                    active:true,
                },
            ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    );
}