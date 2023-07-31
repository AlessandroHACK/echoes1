import '@/styles/junk.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark '>
      <body className='bg-gray-100 dark:bg-zinc-900'>
        <title>Echoes</title>    
                  {children}
      </body>

    </html>
  );
}