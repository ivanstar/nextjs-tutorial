import {fetchRevenue, fetchLatestInvoices, fetchCardData }  from '@/app/lib/data';

export default async function Page() {
  const revenue = await fetchRevenue();
    return <p>Customer Page</p>;
  }